import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import { motion } from 'framer-motion'


export async function getStaticProps() {
  let tags = {}
  try {
    tags = await getAllTags('blog')
  } catch (error) {
    console.error('Error in getStaticProps for tags:', error)
  }
  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="Things I blog about" />
      <motion.div
        className="flex overflow-x-hidden overflow-y-hidden flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
       
      >
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
            Tags
          </h1>
        </div>
        <motion.div
          className="flex max-w-lg flex-wrap"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            const tagSlug = kebabCase(t)
            return (
              <motion.div key={tagSlug} className="mt-2 mb-2 mr-5" variants={tagVariants}>
                <Tag text={t} />
                <Link
                  href={`/tags/${tagSlug}`}
                  className="ml-3 P-3 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                >
                  {`(${tags[t]})`}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </>
  )
}