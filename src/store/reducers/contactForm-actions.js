
export const sendFormData = (form) => {
    return async (dispatch) => {
        const sendRequest = async () => {
            const response = await fetch(
                'https://in-good-hands-db402-default-rtdb.europe-west1.firebasedatabase.app/contactForm.json',
                {
                    method: 'PUT',
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
        } catch (error) {
            console.log(error);
        }
    };
};