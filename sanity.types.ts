/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Tag = {
  _id: string;
  _type: 'tag';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Post = {
  _id: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  subtitle?: string;
  excerpt?: string;
  slug?: Slug;
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
  categories?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'category';
  }>;
  tags?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'tag';
  }>;
  publishedAt?: string;
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  >;
  featured?: boolean;
};

export type Category = {
  _id: string;
  _type: 'category';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
      listItem?: 'bullet';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
      _key: string;
    }
>;

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Tag
  | Post
  | Category
  | Slug
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/lib/queries.ts
// Variable: POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current)][0...12]{    _id,    title,    slug,    excerpt,    publishedAt,    mainImage {      asset->{        _id,        url,        metadata {          lqip        }      },      alt    },    tags[]->{      _id,      title,      slug,      description    }  }
export type POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  excerpt: string | null;
  publishedAt: string | null;
  mainImage: {
    asset: {
      _id: string;
      url: string | null;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
  tags: Array<{
    _id: string;
    title: string | null;
    slug: Slug | null;
    description: string | null;
  }> | null;
}>;
// Variable: POST_QUERY
// Query: *[_type == "post" && slug.current == $slug][0]{    title,    subtitle,    publishedAt,    tags[]->{   ...,  },    mainImage {      asset->{        _id,        url,        metadata {          lqip        }      },      alt    },    body[]{      ...,      _type == "image" => {        _key,        alt,        asset->{          _id,          url,          metadata {            lqip          }        }      },    }  }
export type POST_QUERYResult = {
  title: string | null;
  subtitle: string | null;
  publishedAt: string | null;
  tags: Array<{
    _id: string;
    _type: 'tag';
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    title?: string;
    slug?: Slug;
    description?: string;
  }> | null;
  mainImage: {
    asset: {
      _id: string;
      url: string | null;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
  body: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset: {
          _id: string;
          url: string | null;
          metadata: {
            lqip: string | null;
          } | null;
        } | null;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt: string | null;
        _type: 'image';
        _key: string;
      }
  > | null;
} | null;
// Variable: FEATURED_POSTS_QUERY
// Query: *[_type == "post" && defined(slug.current) && featured == true] | order(publishedAt desc) [0...3]{  _id, title, slug, mainImage {      asset->{        _id,        url,        metadata {          lqip        }      },      alt    }, excerpt, tags[]->{    _id,    slug,    title,  },}
export type FEATURED_POSTS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  mainImage: {
    asset: {
      _id: string;
      url: string | null;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
  excerpt: string | null;
  tags: Array<{
    _id: string;
    slug: Slug | null;
    title: string | null;
  }> | null;
}>;
// Variable: ALL_TAGS_QUERY
// Query: *[_type == "tag" && defined(slug.current)]{    _id,    title,    slug,    description,    "postCount": count(*[_type == "post" && references("tags", ^._id)])  }
export type ALL_TAGS_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  description: string | null;
  postCount: number;
}>;
// Variable: POSTS_BY_TAG_QUERY
// Query: *[_type == "post" && references(*[_type=="tag" && slug.current == $slug]._id)]{    _id,    title,    slug,    excerpt,    publishedAt,    mainImage {      asset->{        url,        metadata {          lqip        }      },      alt    },    tags[]->{      _id,      title,      slug,      description,      postCount    }  }
export type POSTS_BY_TAG_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  excerpt: string | null;
  publishedAt: string | null;
  mainImage: {
    asset: {
      url: string | null;
      metadata: {
        lqip: string | null;
      } | null;
    } | null;
    alt: string | null;
  } | null;
  tags: Array<{
    _id: string;
    title: string | null;
    slug: Slug | null;
    description: string | null;
    postCount: null;
  }> | null;
}>;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '\n  *[_type == "post" && defined(slug.current)][0...12]{\n    _id,\n    title,\n    slug,\n    excerpt,\n    publishedAt,\n    mainImage {\n      asset->{\n        _id,\n        url,\n        metadata {\n          lqip\n        }\n      },\n      alt\n    },\n    tags[]->{\n      _id,\n      title,\n      slug,\n      description\n    }\n  }\n': POSTS_QUERYResult;
    '\n  *[_type == "post" && slug.current == $slug][0]{\n    title,\n    subtitle,\n    publishedAt,\n    tags[]->{\n   ...,\n  },\n    mainImage {\n      asset->{\n        _id,\n        url,\n        metadata {\n          lqip\n        }\n      },\n      alt\n    },\n    body[]{\n      ...,\n      _type == "image" => {\n        _key,\n        alt,\n        asset->{\n          _id,\n          url,\n          metadata {\n            lqip\n          }\n        }\n      },\n    }\n  }\n': POST_QUERYResult;
    '*[_type == "post" && defined(slug.current) && featured == true] | order(publishedAt desc) [0...3]{\n  _id, title, slug, mainImage {\n      asset->{\n        _id,\n        url,\n        metadata {\n          lqip\n        }\n      },\n      alt\n    }, excerpt, tags[]->{\n    _id,\n    slug,\n    title,\n  },\n}': FEATURED_POSTS_QUERYResult;
    '\n  *[_type == "tag" && defined(slug.current)]{\n    _id,\n    title,\n    slug,\n    description,\n    "postCount": count(*[_type == "post" && references("tags", ^._id)])\n  }\n': ALL_TAGS_QUERYResult;
    '\n  *[_type == "post" && references(*[_type=="tag" && slug.current == $slug]._id)]{\n    _id,\n    title,\n    slug,\n    excerpt,\n    publishedAt,\n    mainImage {\n      asset->{\n        url,\n        metadata {\n          lqip\n        }\n      },\n      alt\n    },\n    tags[]->{\n      _id,\n      title,\n      slug,\n      description,\n      postCount\n    }\n  }\n': POSTS_BY_TAG_QUERYResult;
  }
}
