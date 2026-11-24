// RECONSTRUCTED from the deployed OptionToggleGroup chunk; not original TSX.
// Source and hash: ../components/OptionToggleGroup/manifest.json
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export function OptionToggleGroup(props) {
  const { options, size = 'small', disabled, sx } = props;
  const multi = props.multiSelect === true;
  const allowDeselect = !multi && props.allowDeselect === true;
  const handleChange = (_event, value) => {
    if (multi) return props.onChange(value ?? []);
    if (value !== null || allowDeselect) props.onChange(value);
  };
  return (
    <ToggleButtonGroup
      size={size} exclusive={!multi} disabled={disabled}
      value={props.value} onChange={handleChange}
      sx={[{
        border: '1px solid', borderColor: 'rgba(0, 0, 0, 0.23)',
        overflow: 'hidden', bgcolor: '#fff',
        '& .MuiToggleButtonGroup-grouped': { px: 2.5, border: 'none', borderRadius: 0, margin: 0 },
        '& .MuiToggleButtonGroup-grouped:not(:first-of-type)': {
          borderLeft: '1px solid', borderLeftColor: 'rgba(0, 0, 0, 0.23)',
        },
        '& .MuiToggleButton-root.Mui-selected': {
          borderLeftColor: 'transparent', backgroundColor: 'primary.main',
          color: 'primary.contrastText', '&:hover': { backgroundColor: 'primary.main' },
        },
        '& .Mui-selected + .MuiToggleButton-root': { borderLeftColor: 'transparent' },
      }, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    >
      {options.map(option => (
        <ToggleButton key={String(option.value)} value={option.value} disabled={option.disabled}>
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
