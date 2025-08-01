export const loadData = () => async (dispatch: any) => {
  try {
    console.log("Starting to load data...")
    dispatch({
      type: "LoadDataRequest",
    })
    
    const response = await fetch("/api/portfolio")
    console.log("Response status:", response.status)

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "Failed to fetch portfolio data")
    }

    const jsonresponse = await response.json()
    console.log("jsonresponse", jsonresponse)
    
    if (!jsonresponse.success) {
      throw new Error(jsonresponse.message || "Failed to fetch portfolio data")
    }
    
    // Explicitly convert the fetched data to a plain JavaScript object
    // This ensures all Mongoose-specific properties/methods are removed,
    // making it safely serializable for Next.js Server Components.
    const plainData = JSON.parse(JSON.stringify(jsonresponse.data))
    console.log("Plain data:", plainData)

    dispatch({
      type: "LoadDataSuccess",
      payload: plainData, // Dispatch the plain object
    })
    console.log("Data loaded successfully")
  } catch (error: any) {
    console.error("Error loading data:", error)
    dispatch({
      type: "LoadDataFail",
      payload: error.message || "Something went wrong", // Use error.message for fetch errors
    })
  }
}
