// RECONSTRUCTED from the deployed InlineErrorAlert chunk; not original TSX.
// Source and hash: ../components/InlineErrorAlert/manifest.json
import Alert from '@mui/material/Alert';

export function InlineErrorAlert({ message }) {
  return message ? (
    <Alert severity="error" variant="outlined" sx={{ fontSize: '14px', py: 0.5 }}>
      {message}
    </Alert>
  ) : null;
}
