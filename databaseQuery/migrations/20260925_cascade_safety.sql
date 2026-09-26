-- MariaDB 전용. 앱 정지 및 백업 후 실행. 미사용 역방향 컬럼은 복구를 위해 유지한다.
DELIMITER //
CREATE OR REPLACE PROCEDURE migrate_cascade_safety()
BEGIN
    DECLARE finished INT DEFAULT 0;
    DECLARE table_name_value VARCHAR(64);
    DECLARE fk_name_value VARCHAR(64);
    DECLARE constraints_to_drop CURSOR FOR
        SELECT TABLE_NAME, CONSTRAINT_NAME FROM information_schema.KEY_COLUMN_USAGE
        WHERE TABLE_SCHEMA=DATABASE() AND REFERENCED_TABLE_NAME IS NOT NULL AND (
            (TABLE_NAME='materials' AND COLUMN_NAME='material_inventory_material_inventory_no') OR
            (TABLE_NAME='material_inventory' AND COLUMN_NAME='material_in_out_history_material_history_no') OR
            (TABLE_NAME='production_planning' AND COLUMN_NAME='material_procurement_planning_material_procurement_plan_no') OR
            (TABLE_NAME='material_inventory' AND COLUMN_NAME='materials_material_no'));
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET finished=1;

    IF EXISTS (SELECT 1 FROM materials WHERE material_inventory_material_inventory_no IS NOT NULL)
        OR EXISTS (SELECT 1 FROM material_inventory WHERE material_in_out_history_material_history_no IS NOT NULL)
        OR EXISTS (SELECT 1 FROM production_planning WHERE material_procurement_planning_material_procurement_plan_no IS NOT NULL) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='Reverse references are in use; migration aborted';
    END IF;
    IF EXISTS (SELECT materials_material_no FROM material_inventory WHERE materials_material_no IS NOT NULL GROUP BY materials_material_no HAVING COUNT(*)>1) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT='Duplicate inventories; migration aborted';
    END IF;
    OPEN constraints_to_drop;
    drop_loop: LOOP
        FETCH constraints_to_drop INTO table_name_value, fk_name_value;
        IF finished=1 THEN LEAVE drop_loop; END IF;
        SET @ddl=CONCAT('ALTER TABLE `',table_name_value,'` DROP FOREIGN KEY `',fk_name_value,'`');
        PREPARE statement_to_run FROM @ddl;
        EXECUTE statement_to_run;
        DEALLOCATE PREPARE statement_to_run;
    END LOOP;
    CLOSE constraints_to_drop;
    ALTER TABLE material_inventory ADD CONSTRAINT fk_inventory_material_restrict
        FOREIGN KEY (materials_material_no) REFERENCES materials(material_no) ON DELETE RESTRICT ON UPDATE RESTRICT;
    CREATE UNIQUE INDEX IF NOT EXISTS uk_inventory_material ON material_inventory(materials_material_no);
END //
DELIMITER ;
CALL migrate_cascade_safety();
DROP PROCEDURE migrate_cascade_safety;
