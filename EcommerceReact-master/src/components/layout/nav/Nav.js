import * as React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/LoginActions';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import { useHistory } from "react-router-dom";
import '../../../scss/nav.scss';

const ButtonAppBar = () => {

    const dispatch = useDispatch();
    let history = useHistory();
    return (
        <Box sx={{ flexGrow: 1 }} className="nav">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div">
                        Challenge
                    </Typography>
                    <Typography component="div" align="center">
                        <Button  onClick={()=>history.push("/app/common/Service")}>
                            Services
                        </Button>
                    </Typography>
                    <Typography component="div">
                    <Button  onClick={()=>history.push("/app/common/Transactions")}>
                            Transacciones
                        </Button>
                    </Typography>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                    <Button  onClick={()=>history.push("/app/common/Cars")}>
                            Autos
                        </Button>
                    </Typography>
                    <Typography>
                    <Tooltip title="Logout">
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={() => { dispatch(logout()); history.push("/") }}
                        >
                            <LogoutIcon />
                        </IconButton>
                    </Tooltip>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default ButtonAppBar;