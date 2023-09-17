from urllib.request import urlopen
from bs4 import BeautifulSoup
import pymysql
import urllib.request
import urllib.error
import base64
from io import BytesIO
from PIL import Image
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time



service = Service('D:\Downloads\chromedriver-win64') # 크롬 드라이버 다운받아서 위치 지정
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)

urlno = ['1013', '1014', '1276', '1015', '1016', '1147', '1148', '1020', '1199', '1024', '1018', '1345']
materialtype = ['MAINBOARD', 'MEMORY', 'SSD', 'HDD', 'GPU','CASE', 'POWER', 'COOLER', 'SOUNDCARD', 'MONITER', 'KEYBOARD', 'MOUSE']

for k in range(len(urlno)):
    url =  ("https://www.compuzone.co.kr/product/product_list.htm?BigDivNo=4&MediumDivNo="+urlno[k])
        
    driver.get(url)

    breaker = False
    n = 1
    for j in range (1, 10):
        
        try:       
            driver.current_url

            search_box = driver.find_element(By.XPATH, '//*[@id="product_list_ul"]/li/div[2]/div[2]/div/a') # 원하는 태그 위치
            actions = webdriver.ActionChains(driver).move_to_element(search_box)    # 해당 위치로 마우스 이동
            # actions = webdriver.ActionChains(driver).click(search_box) # 마우스 클릭
            actions.perform()

            SCROLL_PAUSE_SEC = 1

            # 스크롤 높이 가져옴
            last_height = driver.execute_script("return document.body.scrollHeight")

            while True:
                # 끝까지 스크롤 다운
                driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

                # 1초 대기
                time.sleep(SCROLL_PAUSE_SEC)

                # 스크롤 다운 후 스크롤 높이 다시 가져옴
                new_height = driver.execute_script("return document.body.scrollHeight")
                if new_height == last_height:
                    break
                last_height = new_height

            
            soup = BeautifulSoup(driver.page_source, 'html.parser')
            # response = urlopen(url)
            # soup = BeautifulSoup(response, "html.parser")
            name = list()
            name = soup.select('#product_list_ul>li>div>div>div>a')

            imagename = soup.select('#product_list_ul>li>div>div>a>img')

            
            for i in imagename:
                imgUrl = i['src'] 
                with urlopen(imgUrl) as f:
                    with open('c:/Upload/' + materialtype[k] + str(n)+'.jpg','wb') as h: # 이미지 + 사진번호 + 확장자는 jpg
                        img = f.read() #이미지 읽기
                        h.write(img) # 이미지 저장
                n += 1
                
            print('다운로드 완료')

            for i in name:
                print(i.text)
            
            #name = soup.findAll('a',{'id':'product_list_ul'})
            #for i in name:
            #    print(i.get_text())
            
            print(name[0].text.lstrip().rstrip())
            print(name[1].text.lstrip().rstrip())
            print(name[2].text.lstrip().rstrip().replace("원","").replace(",",""))
            
            
            conn = pymysql.connect(host='localhost', user='root', password='12345', db='delidb', port=3307 , charset='utf8')
            cur = conn.cursor(pymysql.cursors.DictCursor)
            
            
            for i in range(int(len(name)/3)):
                try:
                    print(name[i*3+0].text.lstrip().rstrip())
                    print(name[i*3+1].text.lstrip().rstrip())
                    print(name[i*3+2].text.lstrip().rstrip().replace("원","").replace(",",""))
                    if '%' in name[i*3+2].text:
                        print(name[i*3+2].text, '제거됨')
                        del name[i*3+2]
                        pass
                    
                    sql = "INSERT INTO materials (regdate, moddate, material_code, material_name, material_explaination, material_supply_price, material_type) values(%s, %s, %s, %s, %s, %s, %s)"

                    material_code = "양식 설정"

                    now = time
                    regdate = now.strftime('%Y-%m-%d %H:%M:%S')
                    moddate = now.strftime('%Y-%m-%d %H:%M:%S')

                    val = (regdate, moddate, material_code, name[i*3+0].text.lstrip().rstrip().split(" (")[0][:50], name[i*3+1].text.lstrip().rstrip(), int(name[i*3+2].text.lstrip().rstrip().replace("원","").replace(",","")), materialtype[k])

                    cur.execute(sql, val)
                    conn.commit()
                except:
                    print("%d 번째에서 오류" % i)
                    break
        
            

            search_box_bottompagenum = driver.find_elements(By.XPATH, '//*[@id="page_wrap"]/div/a') # 원하는 태그 위치

            for btn in search_box_bottompagenum:
                
                if(btn.text == str(j+1)):
                    actions = webdriver.ActionChains(driver).move_to_element(btn)    # 해당 위치로 마우스 이동
                    actions = webdriver.ActionChains(driver).click(btn) # 마우스 클릭
                    actions.perform()
                    PAGE_PAUSE_SEC = 1
                    time.sleep(PAGE_PAUSE_SEC)
                    break
                if(len(search_box_bottompagenum) < j+1):
                    breaker = True
                    
            if breaker == True:
                break
            
        except:
            print("%d 번째에서 오류" % j)
            pass
