import { Button, ButtonProps } from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

export type NextButtonLinkProps = PropsWithChildren<NextLinkProps & Omit<ButtonProps, 'as'>>;

//  Has to be a new component because both chakra and next share the `as` keyword
export function NextButtonLink({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}: NextButtonLinkProps) {
  return (
    <NextLink
      passHref={true}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
    >
      <Button {...chakraProps}>{children}</Button>
    </NextLink>
  );
}
