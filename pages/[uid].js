import { createClient } from '../prismicio'

export default function Homepage({ page }) {
  return <h1>{page.uid}</h1>
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('page', params.uid)

  return {
    props: { page },
  }
}