import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";

import { logo, yariga, logo2 } from "assets";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo2} alt="Yariga" width="40px" />
                ) : (
                    <img src={logo2} alt="Refine" width="40px" />
                )}
            </Link>
        </Button>
    );
};
