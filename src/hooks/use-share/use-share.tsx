import { Link } from 'lucide-react'
import { useCallback, useMemo } from 'react'
import { useClipboard } from '../use-clipboard'
import {
  SOCIAL_MEDIA_PROVIDERS,
  ShareConfig,
  SocialProvider,
} from './social-providers'

type UserShareConfig = ShareConfig & {
  clipboardTimeout?: number
}

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UserShareConfig) => {
  const { handleCopy, isCopied } = useClipboard({ timeout: clipboardTimeout })

  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  )

  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === 'clipboard') {
          return await handleCopy(shareConfig.url)
        }

        const providerConfig = SOCIAL_MEDIA_PROVIDERS[provider]

        if (!providerConfig) {
          throw new Error(`Provider ${provider} not found`)
        }

        const shareUrl = providerConfig.shareUrl(shareConfig)

        const shareWindow = window.open(
          shareUrl,
          '_blank',
          'width=600,height=600, location=yes, status=yes'
        )

        return !!shareWindow
      } catch (error) {
        console.error(error)
      }
    },
    [shareConfig, handleCopy]
  )

  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_MEDIA_PROVIDERS).map(
        ([provider, providerConfig]) => ({
          provider,
          name: providerConfig.name,
          icon: providerConfig.icon,
          action: () => share(provider as SocialProvider),
        })
      ),
      {
        provider: 'clipboard',
        name: isCopied ? 'Link copiado' : 'Copiar link',
        icon: <Link className="size-4" />,
        action: () => share('clipboard'),
      },
    ],
    [share, isCopied]
  )

  return {
    shareButtons,
  }
}
