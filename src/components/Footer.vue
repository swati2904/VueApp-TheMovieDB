<template>
    <footer class="footer-section">
        <nav>
            <div>
                <h3>Information</h3>
                <ul>
                    <li>
                        <a>About</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                    <li>
                        <a>Support</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Get To Involved</h3>
                <ul>
                    <li>
                        <a>3rd party Aplication</a>
                    </li>
                    <li>
                        <a>Contribution</a>
                    </li>
                    <li>
                        <a>Add Series</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Community</h3>
                <ul>
                    <li>
                        <a>Guideline</a>
                    </li>
                    <li>
                        <a>Social</a>
                    </li>
                    <li>
                        <a>LeaderBoard</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3>Legal</h3>
                <ul>
                    <li>
                        <a>Term Of Use</a>
                    </li>
                    <li>
                        <a>Privacy Policy</a>
                    </li>
                </ul>
            </div>

        </nav>

    </footer>
</template>

<script>
/*
About
=====

Done all the required functionality of the footer part.
*/
export default {
    
}
</script>
<style scoped>
footer{
    background-size: cover;
    /* background: rgb(48,77,85); */
    background: linear-gradient(90deg, rgba(48,77,85,0.8099614845938375) 8%, rgba(79,192,141,1) 63%, rgba(40,202,198,1) 100%, rgba(0,212,255,1) 100%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}

footer,nav{
    display:flex;
    width: 100%;
    justify-content: space-around;
  
}

h3{
    margin: 0;
    font-weight: bolder;
    text-transform: uppercase;
    color: black;
    white-space: nowrap;
    text-align: center;
}
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}
footer nav ul li{
    margin: 0;
    line-height: 1.7em;
    white-space: nowrap;
    text-align: center;

}
li{
    
    overflow: hidden;
    color:black;
    
}
footer nav a {
    color:black;
}
a{
    text-decoration: none;
    font-weight: normal;
}
</style>