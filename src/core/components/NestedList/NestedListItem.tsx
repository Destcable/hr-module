import { FC, ReactNode } from "react"
import { ListItemButton, ListItemIcon, ListItemText, SxProps, TypographyProps } from "@mui/material"
import ExpandLess from "@mui/icons-material/ExpandLess"
import ExpandMore from "@mui/icons-material/ExpandMore"

interface INestedListItemProps {
    icon?: ReactNode
    text?: string
    nested?: boolean
    isOpen?: boolean
    sx?: SxProps
    typographyProps?: TypographyProps<"span", { component?: "span" }>
    onClick?: () => void
    children?: ReactNode
}

export const NestedListItem: FC<INestedListItemProps> = ({
    icon,
    text,
    nested,
    isOpen,
    sx,
    typographyProps,
    onClick,
    children
}) => {
    return (
        <>
            <ListItemButton onClick={onClick} sx={sx}>
                {icon &&
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                }

                {text &&
                    <ListItemText primary={text} primaryTypographyProps={typographyProps} />
                }

                {nested === true && (isOpen ? <ExpandLess /> : <ExpandMore />)}

            </ListItemButton>
            {children}
        </>
    )
}