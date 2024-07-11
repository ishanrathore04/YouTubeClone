// action/user.js

export const UPDATE_POINTS_REQUEST = 'UPDATE_POINTS_REQUEST';
export const UPDATE_POINTS_SUCCESS = 'UPDATE_POINTS_SUCCESS';
export const UPDATE_POINTS_FAILURE = 'UPDATE_POINTS_FAILURE';

export const updatePoints = (userId, pointsToAdd) => async (dispatch) => {
    dispatch({ type: UPDATE_POINTS_REQUEST });

    try {
        // Perform API call or any logic to update points
        const response = await fetch(`/api/users/${userId}/points`, {
            method: 'POST',
            body: JSON.stringify({ pointsToAdd }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Example: Dispatch success action
        dispatch({ type: UPDATE_POINTS_SUCCESS, payload: response.data });
    } catch (error) {
        // Example: Dispatch failure action
        dispatch({ type: UPDATE_POINTS_FAILURE, error: error.message });
    }
};
