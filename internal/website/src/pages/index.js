import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Link from '@docusaurus/Link'
import withBaseUrl from '@docusaurus/withBaseUrl'
import * as React from 'react'
import { Feature } from '../components'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import CodeBlock from '@theme/CodeBlock'

const Glare = styled.div`
  background: radial-gradient(rgba(69, 72, 75, 0.15), rgba(69, 72, 75, 0.25));
`

const Features = styled(motion.section)`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  padding: 1.5rem 0;
`

Features.defaultProps = {
  className: 'container',
}

const FeatureLink = styled(Link)`
  color: inherit !important;
  text-decoration: none !important;
`

export default () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={'hero hero--primary'}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <Link
              className={'button button--secondary button--lg'}
              to={withBaseUrl('docs/overview')}
            >
              Get Started
            </Link>
          </div>
          <CodeBlock className="language-jsx">{`const User = ({ user }) => user.name
const App = () => (
  <div>
    {query.users({ limit: 10 }).map(user => (
      <User key={user.id} user={user} />
    ))}
  </div>
)`}</CodeBlock>
          <CodeBlock className="language-graphql">{`query App {
  me { name }
  users(limit: 10) {
    name
  }
}`}</CodeBlock>
        </div>
      </header>
      <main>
        <Glare>
          <Features
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >
            <FeatureLink
              to={withBaseUrl('docs/intro/features#invisible-data-fetching')}
            >
              <Feature
                title="Invisible data fetching"
                imageUrl="img/graphql.svg"
              >
                Queries are generated at runtime, based on the data your app
                consumes.
              </Feature>
            </FeatureLink>
            <FeatureLink to={withBaseUrl('docs/intro/features#typescript')}>
              <Feature title="Strongly typed" imageUrl="img/typescript.png">
                Built from the ground up to work with Typescript — no more code
                generation
              </Feature>
            </FeatureLink>
            <FeatureLink to={withBaseUrl('docs/react/basic-usage')}>
              <Feature title="React.js" imageUrl="img/react.svg">
                Uses React Suspense, hooks, automatic component updates and
                more.
              </Feature>
            </FeatureLink>
            <FeatureLink to={withBaseUrl('docs/intro/features')}>
              <Feature
                title="Production ready"
                imageUrl="img/production_ready.png"
              >
                Fully-featured with inbuilt cache, extensions and more.
              </Feature>
            </FeatureLink>
          </Features>
        </Glare>
      </main>
    </Layout>
  )
}
