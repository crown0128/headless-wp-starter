let wpUrl;

// Use localhost for clientside requests & docker hostname for serverside.
if (typeof window !== 'undefined') {
    wpUrl = process.env.WORDPRESS_URL || 'http://localhost:8080/wp-json';
} else {
    wpUrl = 'http://wp-headless/wp-json';
}

export const Config = { apiUrl: wpUrl };
