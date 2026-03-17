/voting-app
|-- /config
|   |-- db.js            # Database configuration
|-- /controllers
|   |-- authController.js  # Authentication controllers
|   |-- pollController.js    # Poll controllers
|-- /models
|   |-- user.js          # User model (e.g., schema)
|   |-- poll.js          # Poll model (e.g., schema)
|-- /private             # Server-side files not accessible via HTTP
|   |-- server.js        # Main server file
|-- /public              # Publicly accessible files
|   |-- index.html       # Poll page
|   |-- login.html       # Login page
|   |-- signup.html      # Signup page
|-- package.json         # Project dependencies and scripts
|-- README.md            # Project documentation