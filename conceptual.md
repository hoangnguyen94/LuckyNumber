### Conceptual Exercise

Answer the following questions below:

- What is RESTful routing?
	Rest is a naming and rounting convention used by APIs that mostly return JSON. REST dictates the url route for each HTTP method that may be used to make a request to the API. An example for an API that returns a fact about an animal might be to use a "GET" request to route `api/aniamls/:id`. If the API allowed you to then delete the animal from the database, there could be a 'DELETE' request to the same route.
- What is a resource?
	the resourse is how we identify the object (typically table name) we are mapping to. The "/resourse" comes after the domain name, when we have nested routes we have multiple resourses.
- When building a JSON API why do you not include routes to render a form that when submitted creates a new user?
	A JSON API is intended to simply return JSON data to the client based on the request sent to the server. This API doesn't generally bother with how a user may actually send the request, so it wouldn't need to include a route that renders a form. Instead, this can be done on the front end, and the data gathered from the form can be sent as JSON to the JSON API where it will be processed accordingly, and JSON will be returned in response.
- What does idempotent mean? Which HTTP verbs are idempotent?
	An HTTP method is idempotent if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state. In other words, an idempotent method should not have any side effects — unless those side effects are also idempotent.
	An HTTP method is idempotent if an identical request can be made once or several times in a row with the same effect while leaving the server in the same state. In other words, an idempotent method should not have any side effects — unless those side effects are also idempotent
- What is the difference between PUT and PATCH?
	The PUT method uses the request URI to supply a modified version of the requested resource which replaces the original version of the resource, whereas the PATCH method supplies a set of instructions to modify the resource.
- What is one way encryption?
	One-way hash functions are also called hash functions, hash encryption, hashing algorithms, and message digest functions. This type of encryption is extremely secure, as it is almost impossible to determine the hash value unless the hacker knows which hash algorithm was used.
- What is the purpose of a `salt` when hashing a password?
	Salting is simply the addition of a unique, random string of characters known only to the site to each password before it is hashed, typically this `salt` is placed in front of each password. The salt value needs to be stored by the site, which means sometimes sites use the same salt for every password.
- What is the purpose of the Bcrypt module?
	Bcrypt allows building a password security platform that can evolve alongside hardware technology to guard against the threats that the future may bring, such as attackers having the computing power to crack passwords twice as fast.
- What is the difference between authorization and authentication?
	Authentication is the process of determining whether or not a user is actually a valid user. This can help keep bots away from your application, but is mostly used to make sure the person attempting to access your application is actually registered / signed-up before they can access anything.
	Authorization is the level of access the authenticated user has within the application. For example, a user may be an admin, meaning they are authorized to see details about other user accounts while a regular user would only be able to see details about their own.