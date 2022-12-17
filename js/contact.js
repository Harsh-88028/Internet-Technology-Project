window.onload = function (params) {
    // console.log("I'm in");
    document.getElementById("final-submit-button").addEventListener("click", (e) => {
        e.preventDefault();
        // alert("hello");
        // console.log("clicked");
        const name = document.getElementById("input-10").value;
        const emailId = document.getElementById("input-11").value;
        const subject = document.getElementById("input-12").value;
        const message = document.getElementById("input-13").value;
        const obj = {
            name,
            emailId,
            subject,
            message
        }
        // console.log(obj);
        //--------------------------------------------------
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        };
        //--------------------------------------------------
        fetch("http://localhost:5000/api/add/user", options)
            .then((response) => {
                // console.log("hn bhai kaam hogya");
                document.getElementById("input-10").value = "";
                document.getElementById("input-11").value = "";
                document.getElementById("input-12").value = "";
                document.getElementById("input-13").value = "";
                
                alert("Data added successfully!");

            })

    });

}