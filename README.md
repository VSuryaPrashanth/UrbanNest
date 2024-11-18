# To run locally
1. Clone Project:
    ```bash
    git clone https://github.com/harshpx/Rentify.git
    cd Rentify
    ```
2. Client setup:
    * Basic setup:
        ```bash
        cd client
        npm i
        ```
    * If you want Quote Emailing functionality: Setup EmailJS variables in `.env` file inside client dir (get these variables from your EmailJS profile)
        * VITE_EMAILJS_SERVICE_NAME (Your EmailJS Service name)
        * VITE_EMAILJS_TEMPLATE_NAME (Your EmailJS Template name)
        * VITE_EMAILJS_PUBLIC_KEY (Your EmailJS Public Key)
    * If you want to setup server locally too (*Not Recommended), change server proxy in `vite.config.js` to use http proxy while sending requests to local server at port 5000.
        ```js
        export default defineConfig({
            server: {
                proxy: {
                '/api': 'http://localhost:5000/'
                }
            },
            plugins: [react()],
        })
        ```
3. Server setup (Not necessary as server is already deployed on [link](https://rentify-server-harshpx.vercel.app), do only for learning purposes):
    * Go to server directory and install required libraries.
    * Create `.env` file similar to `.env_sample` present in directory 
    * Setup MongoDB Atlas and cloudinary to get following environment variables:
        ```bash
        //.env file//
        MONGO_URI=""
        CLOUDINARY_CLOUD_NAME=""
        CLOUDINARY_API_KEY=""
        CLOUDINARY_API_SECRET=""
        PORT=5000
        JWT_SECRET="" (can be set aynthing accordingly)
        ```
           
    ```bash
    cd server
    touch .env
    //now fill details in .env file//
    npm i
    ```
