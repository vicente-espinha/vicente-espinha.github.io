export type Photo = {
  src: string; // path under /public
  caption: string; // short, lowercase label shown on hover
  alt: string;
};

// "Off the clock" grid on the About page. Put images in public/photos/
// (roughly square or portrait, ~1000px wide). The grid shows once there are 4+.
export const photos: Photo[] = [
  {
    src: '/photos/porto.jpg',
    caption: 'porto',
    alt: 'Vicente smiling with an ice cream in a street in Porto',
  },
];

export const PHOTO_GRID_MIN = 4;
