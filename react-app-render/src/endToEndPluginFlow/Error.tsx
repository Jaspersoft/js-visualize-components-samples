
import {
    JVIcon,
    JVTypography,
    JVConfirmationDialog,
    JVButton,
} from "@jaspersoft/jv-ui-components";

interface IErrorDialog {
    handleCancelBtn: () => void;
    errorMsg: string | undefined;
}
const ActionBtn = (props: any) => {
    const { color, actionBtn, text } = props;
    return (
        <JVButton
            size="large"
            variant="contained"
            color={color}
            onClick={actionBtn}
        >
            {text}
        </JVButton>
    );
};


export const ErrorDialog = ({
                                handleCancelBtn,
                                errorMsg,
                                ...rest
                            }: IErrorDialog ) => {
    return (
        <>
            {errorMsg && (
                <JVConfirmationDialog
                    id="confirmationDialog"
                    open
                    maxWidth="xs"
                    dialogTitle={"Error"}
                    type="error"
                    disableEscapeKeyDown
                    DialogContentComponent={
                        <JVTypography variant="body1">{errorMsg}</JVTypography>
                    }
                    DialogActionsComponent={
                        <ActionBtn
                            actionBtn={handleCancelBtn}
                            text={"Cancel"}
                            color="error"
                        />
                    }
                    DialogSubTitleComponent={
                        <>
                            <JVIcon icon="cancelRound" size="small" />
                            <JVTypography
                                className="jv-mTextError jv-uMargin-b-04"
                                variant="body1"
                            >
                                {"The following error has been occurred. You can close this error message and try to render schedule plugin again ."}
                            </JVTypography>
                        </>
                    }
                    DialogTitleTypographyProps={{
                        variant: "h2",
                    }}
                    {...rest}
                />
            )}
        </>
    );
};
