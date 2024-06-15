export class SDK {
    constructor(public loggedInUserId?: string) {}

    createPost(title: string) {
        this.assertLoggedIn();

        console.log(`User ${this.loggedInUserId} created a post with title: ${title}`);
    }

    assertLoggedIn(): asserts this is this & { loggedInUserId: string } {
        if (!this.loggedInUserId) {
            throw new Error('User is not logged in');
        }
    }
}