export const loadData = () => async (dispatch: any) => {
  try {
    dispatch({
      type: "LoadDataRequest",
    })
    const response = await fetch("/api/portfolio")

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to fetch portfolio data")
    }

    const jsonresponse = await response.json()
    // Explicitly convert the fetched data to a plain JavaScript object
    // This ensures all Mongoose-specific properties/methods are removed,
    // making it safely serializable for Next.js Server Components.
    const plainData = JSON.parse(JSON.stringify(jsonresponse.data))

    dispatch({
      type: "LoadDataSuccess", // Changed from LoadUserSuccess
      payload: plainData, // Dispatch the plain object
    })
  } catch (error: any) {
    dispatch({
      type: "LoadDataFail",
      payload: error.message || "Something went wrong", // Use error.message for fetch errors
    })
  }
}
