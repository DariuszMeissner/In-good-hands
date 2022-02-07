import { uiActions } from "./uiSlice";

export const sendFormData = (form) => {
    return async (dispatch) => {

        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending form data!'
            })
        )

        const sendRequest = async () => {
            const response = await fetch(
                'https://in-good-hands-db402-default-rtdb.europe-west1.firebasedatabase.app/contactForm.json',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        entry: form.entry,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error('Sending form data failed.');
            }
        };

        try {
            await sendRequest();
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Your form data was sent'
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending form data failed!'
                })
            )
        }
    };
};