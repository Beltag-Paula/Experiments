/voting-app
|-- /config
|   |-- db.js            # Database configuration
|-- /controllers
|   |-- authController.js  # Authentication controllers
|   |-- pollController.js    # Poll controllers
|   |-- authMiddleware.js # Authentification with JWT tokens
|-- /models
|   |-- user.js          # User model (e.g., schema) (not used, is empty)
|   |-- poll.js          # Poll model (e.g., schema) (same empty)
|-- /private             # Server-side files not accessible via HTTP
|   |-- server.js        # Main server file
|   |-- userDB.db         #This is where the tables users and polls will be
|-- /public              # Publicly accessible files
|   |-- poll.html        # Poll page
|   |-- index.html       # Login/SignUp page
|   |-- pollManagement.html   # Admin can view, update and delete polls
|-- package.json         # Project dependencies and scripts
|-- README.md            # Project documentation