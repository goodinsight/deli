// RECONSTRUCTED from the deployed ToneChip chunk; not original TSX.
// Source and hash: ../components/ToneChip/manifest.json
import Box from '@mui/material/Box';

export function ToneChip({ label, tone }) {
  return (
    <Box component="span" sx={{
      px: 1, py: 0.25, borderRadius: 1, fontSize: 12, fontWeight: 600,
      color: tone.color, bgcolor: tone.bg, whiteSpace: 'nowrap',
    }}>
      {label}
    </Box>
  );
}
