import { Paper } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles<Theme, IProps>((theme: Theme) =>
  createStyles({
    root: (props: IProps) => ({
      padding: props.noPadding === true ? theme.spacing(0) : theme.spacing(2),
      marginBottom: theme.spacing(2),
    }),
  })
)

interface IProps {
  /**
   * shildren
   */
  children: React.ReactNode
  /**
   * zero-padding flag
   */
  noPadding?: boolean
}

/**
 * Paper with spacing
 * @param props IProps
 */
export const SpacingPaper = (props: IProps) => {
  const { children } = props
  const classes = useStyles(props)
  return (
    <Paper className={classes.root} elevation={6}>
      {children}
    </Paper>
  )
}
