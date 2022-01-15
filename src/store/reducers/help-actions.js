import { helpActions } from './help-slice'

export const fetchHelpData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://in-good-hands-db402-default-rtdb.europe-west1.firebasedatabase.app/Help_category.json'
            );

            if (!response.ok) {
                throw new Error("Could not fetch data")
            }

            const data = await response.json();
            return data
        };

        try {
            const helpData = await fetchData();
            dispatch(
                helpActions.replaceData({
                    category: helpData || []
                })
            );
        } catch (error) {
            console.log(error);
        }
    }
}