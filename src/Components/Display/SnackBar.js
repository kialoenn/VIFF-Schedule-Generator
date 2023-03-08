import * as React from 'react';
import { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = ({ trigger }) => {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (trigger.active) {
            setOpen(true);
        }
    }, [trigger]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000}
                onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    {trigger.message}
                </Alert>
            </Snackbar>
        </Stack>
    );
};

export default Toast;
