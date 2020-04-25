export class LoadingControllerMock {
    public create(): any {
        return {
            present: () => {
                return;
            },
            dismiss: () => {
                return;
            }
        };
    }
}
