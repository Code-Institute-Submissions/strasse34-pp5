### Navigation and Authentication

1. **View Navbar**: As a user, I can view a navbar from every page so that I can navigate easily between pages.
2. **Create Account**: As a user, I can create a new account so that I can access all the features for signed-up users.
3. **Sign In**: As a user, I can sign in to the app so that I can access functionality for logged-in users.
4. **Logged-in Status**: As a user, I can tell if I am logged in or not so that I can log in if I need to.
5. **Refreshing Access Tokens**: As a user, I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.
6. **Conditional Rendering**: As a logged-out user, I can see sign-in and sign-up options so that I can sign in/sign up.
7. **Avatar**: As a user, I can view user's avatars so that I can easily identify users of the application.

| User Story               | Steps                                                                           | Expected Result                                                                             | Actual Result    |
| ------------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------- |
| View Navbar              | Navigate to any page                                                            | The navbar is displayed consistently across all pages, containing links to essential pages. | Work as expected |
| Create Account           | Access the application as a logged-out user and attempt to create a new account | The application provides a user registration form with fields for username and password.    | Work as expected |
| Sign In                  | Access the application as a logged-out user and attempt to sign in              | The application provides a sign-in form with fields for username and password.              | Work as expected |
| Logged-in Status         | Log in to the application                                                       | The application displays username and avatar in navbar.                                     | Work as expected |
| Refreshing Access Tokens | Log in to the application and remain idle for an extended period                | The user's session remains active until they actively log out or the refresh token expires. | Work as expected |
| Conditional Rendering    | Access the application as a logged-out user                                     | Sign-in and sign-up navlinks are prominently displayed and easily accessible.               | Work as expected |
| Avatar                   | Navigate to any page                                                            | User avatars are displayed next to their usernames in the navbar.                           | Work as expected |

### Adding and Liking Posts

1. **Create Posts**: As a logged-in user, I can create posts so that I can share my experience with the world.
2. **View a Post**: As a user, I can view the details of a single post so that I can learn more about it.
3. **Like a Post**: As a logged-in user, I can like a post so that I can show my support for the posts that interest me.

| User Story   | Steps                                                                                                  | Expected Result                                                                                                                                                               | Actual Result    |
| ------------ | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Create Posts | Navigate to the post creation page. Fill out the post creation form with necessary details and submit. | The post creation form allows users to enter post details such as brand, model, production year, other details, and personal experience. Users can also upload images.        | Work as expected |
| View a Post  | Click on a post                                                                                        | Redirected to a dedicated page displaying the post's details. The details include brand, model, production year, other details, personal experience, and any uploaded images. | Work as expected |
| Like a Post  | Navigate to a post page                                                                                | The post displays a like icon associated with it. Clicking the icon registers a like for the post.                                                                            | Work as expected |

### The Posts Page

1. **View Most Recent Posts**: As a user, I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content.
2. **Search for Posts**: As a user, I can search for posts with keywords so that I can find the posts and user profiles I am most interested in.
3. **View Liked Posts**: As a logged-in user, I can view the posts I liked so that I can find the posts I enjoy the most.
4. **View Posts of Followed Users**: As a logged-in user, I can view content filtered by users I follow so that I can keep up to date with what they are posting about.
5. **Infinite Scroll**: As a user, I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc.

| User Story                     | Steps                                      | Expected Result                                            | Actual Result    |
| ------------------------------ | ------------------------------------------ | ---------------------------------------------------------- | ---------------- |
| View most recent posts         | Access the page with most recent posts     | Most recent posts are displayed with relevant details      | Work as expected |
| Search for posts with keywords | Enter keywords into the search bar         | Relevant posts and user profiles are displayed             | Work as expected |
| View Posts of Followed Users   | Navigate to Feed page from the navbar      | Feed page for viewing posts of followed users is displayed | Work as expected |
| View Liked Posts               | Navigate to the liked page from the navbar | liked page for viewing liked posts is displayed            | Work as expected |
| Infinite Scroll                | Scroll to the bottom of the page           | Additional images are loaded automatically                 | Work as expected |

### Post Page

1. **Post Page**: As a user, I can view the post page so that I can read the comments about the post.
2. **Edit a post**: As a post owner, I can edit my post content so that I can make corrections or update my post after it was created.
3. **Delete a post**: As a post owner, I can delete my post so that I can remove my post after it was created.
4. **Create a comment**: As a logged in user, I can add comments to a post so that I can share my thoughts about the post.
5. **Comment date**: As a user, I can see how long ago a comment was made so that I know how old a comment is.
6. **View comments**: As a user, I can read comments on posts so that I can read what other users think about the posts.
7. **Delete comments**: As an owner of a comment, I can delete my comment so that I can control removal of my comment from the application.
8. **Edit a comment**: As an owner of a comment, I can edit my comment so that I can fix or update my existing comment.

| User Story       | Steps                                                       | Expected Result                                                                                          | Actual Result    |
| ---------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------- |
| Post Page        | Navigate to the post page                                   | The post page is displayed with all the relevant details of the post, including comments.                | Work as expected |
| Edit a post      | Click on a post you owned, then click on 3 dots edit option | The post editing interface is displayed, allowing the user to modify the post content.                   | Work as expected |
| Delete a Post    | Navigate to the post you created as the post owner          | The post displays a delete option associated with it. Clicking the option deletes the post.              | Work as expected |
| Create a comment | Navigate to the post page and enter a comment               | The comment is successfully added to the post and displayed along with other comments.                   | Work as expected |
| Comment date     | View the comment timestamp                                  | The timestamp of the comment is displayed in a human-readable format, indicating its age.                | Work as expected |
| View comments    | Scroll through the comments section                         | All comments on the post are displayed in a readable format for the user to read.                        | Work as expected |
| Delete comments  | Access the delete option for the comment                    | The comment is successfully deleted from the post, and its content is removed from the comments section. | Work as expected |
| Edit a comment   | Access the edit option for the comment                      | The comment editing interface is displayed, allowing the user to modify the comment content.             | Work as expected |

### Profile Page

1. **Profile Page**: As a user, I can view other users profiles so that I can see their posts and learn more about them.
2. **Most Followed Profiles**: As a user, I can see a list of the most followed profiles so that I can see which profiles are popular.
3. **User Profile - User Stats**: As a user, I can view statistics about a specific user: bio, favorite car, number of posts, follows and users followed so that I can learn more about them.
4. **Follow/Unfollow a User**: As a logged-in user, I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed.
5. **View All Posts by a Specific User**: As a user, I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them.
6. **Edit Profile**: As a logged-in user, I can edit my profile so that I can change my profile picture, bio, username, and password.
7. **Update Username and Password**: As a logged-in user, I can update my username and password so that I can change my display name and keep my profile secure.

| User Story                        | Steps                                                                      | Expected Result                                                                                                                           | Actual Result    |
| --------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| View Other Users' Profiles        | Click on a user's profile link or avatar from any part of the application. | Redirected to the user's profile page. The profile page displays the user's information, including username, avatar, and basic details.   | Work as expected |
| Most Followed Profiles            | Navigate to the section displaying the most followed profiles.             | The list of most followed profiles is displayed in descending order based on the number of followers.                                     | Work as expected |
| User Profile - User Stats         | Click on a user's profile link or avatar to access their profile.          | The user's profile page includes a section displaying statistics such as bio, favorite car, number of posts, follows, and users followed. | Work as expected |
| Follow/Unfollow a User            | Visit a user's profile page.                                               | The profile page provides an option to follow or unfollow the user. The follow/unfollow status is updated in real-time.                   | Work as expected |
| View All Posts by a Specific User | Click on a user's profile link or avatar to access their profile.          | The user's profile page prominently displays their posts, either through pagination or infinite scrolling.                                | Work as expected |
| Edit Profile                      | Access the account settings page or profile page.                          | The account settings page provides separate sections for updating the profile picture, bio, username, and password fields.                | Work as expected |
