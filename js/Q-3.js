function minandmax() {
    let arr = [18, 30, 40, 50, 80,90];

    let minnumber = arr[0];
    let maxnumber = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minnumber)
            minnumber = arr[i];

        if (arr[i] > maxnumber)
            maxnumber = arr[i];
    }

    console.log("Minimum element is: " + minnumber);
    document.querySelector("h1").innerHTML = "Minimum element is: " + minnumber;


    
    console.log("Maximum element is: " + maxnumber);
    document.querySelector("h2").innerHTML = "Maximum element is: " + maxnumber;

}

minandmax();

