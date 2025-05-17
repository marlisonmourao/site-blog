import { Facebook, Linkedin, Slack, Twitter } from 'lucide-react'

export type ShareConfig = {
  url: string
  title?: string
  text?: string
}

export type SocialProvider =
  | 'linkedin'
  | 'twitter'
  | 'facebook'
  | 'slack'
  | 'clipboard'

export const SOCIAL_MEDIA_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    icon: <Linkedin className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        config.url
      )}`,
  },
  twitter: {
    name: 'Twitter',
    icon: <Twitter className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: 'Slack',
    icon: <Slack className="size-4" />,
    shareUrl: (config: ShareConfig) =>
      `https://slack.com/share?url=${encodeURIComponent(config.url)}`,
  },
}
