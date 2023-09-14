/* eslint-disable @typescript-eslint/no-explicit-any */
export type ImageType = {
    alt_description: string;
    blur_bash: string;
    breadcrumbs: any;
    color: string;
    created_at: string;
    current_user_collections: any;
    description: string | null;
    height: number;
    id: string;
    liked_by_user: boolean;
    likes: number;
    links: {
        download: string;
        download_location: string;
        html: string;
        self: string;
    };
    promoted_at: string;
    slug: string;
    sponsorship: any;
    tags: any;
    topic_submissions: any;
    updated_at: string;
    urls: {
        full: string;
        raw: string;
        regular: string;
        small: string;
        small_s3: string;
        thumb: string;
    };
    user: {
        accepted_tos : boolean;
        bio: string;
        first_name: string;
        for_hire: boolean;
        id: string;
        instagram_username: string | null;
        last_name: string;
        links: {
            ollowers: string;
            following: string;
            html: string;
            likes: string;
            photos: string;
            portfolio: string | null;
            self: string;
        }
        location: string;
        name: string;
        portfolio_url: string | null;
        profile_image: {
            small: string;
            medium: string;
            large: string;
        }
        social: {
            instagram_username: string | null;
            portfolio_url: string | null;
            twitter_username: string | null; 
            paypal_email: string | null;
        }
        total_collections: number;
        total_likes: number;
        total_photos: number;
        twitter_username: string;
        updated_at: string;
        username: string;
    };
    width: number;
}

export type FiguresProps = {
    images: ImageType[];
    maxPage: number;
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export type FieldProps = {
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}