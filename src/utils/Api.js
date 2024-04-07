/** @format */

export default Api = async (data) => {
    try {
            const response = await fetch(
              "https://silvercreditinc.net/api/controller.php",
              {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                  "Content-Type":
                    "application/x-www-form-urlencoded;charset=UTF-8",
                },
              }
            );
            const responseJson = await response.json();
            return JSON.stringify(responseJson);
        } catch (error) {
            console.error(error);
        }
  }
