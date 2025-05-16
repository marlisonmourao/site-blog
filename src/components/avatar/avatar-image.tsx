import Image, { ImageProps } from 'next/image'

type AvatarImageProps = ImageProps

export function AvatarImage({ ...props }: AvatarImageProps) {
  return <Image {...props} />
}
