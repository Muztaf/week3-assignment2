

// JavaScript program for the above approach

function findMultiples(n)
{
    let a = 3; // To keep track of multiples of 3
    let b = 5; // To keep track of multiples of 5
    for (let i=1; i<=n; i++)
    {
        let s = "";

        // Found multiple of 3
        if (i==a)
        {
            a = a + 3; // Update next multiple of 3
            s = s + "Multiple of 3. ";
        }

        // Found multiple of 5
        if (i==b)
        {
            b = b+5; // Update next multiple of 5
            s = s + "Multiple of 5.";
        }

        if (s == "") {
            document.write(i);
            document.write("<br />");
        }
        else {
            document.write(s);
            document.write("<br />");
        }
    }
}


findMultiples(20);

