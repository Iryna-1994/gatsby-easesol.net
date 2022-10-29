import * as React from "react"
import Layout from "@/components/Layout"
import { Link } from "gatsby"
import Seo from "@/components/seo"
import IHeading from "@/components/IHeading"
import IParagraph from "@/components/IParagraph"

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <section className="w-full my-16">
        <div className="container mx-auto">
          <IHeading align="text-center">404: Not Found</IHeading>
          <IParagraph align="text-center">You just hit a route that doesn`t exist... the sadness.</IParagraph>
          <div className="flex justify-center">
            <Link to='/' className="text-center text-secondary-600 dark:text-secondary-400 underline duration-200 hover:-translate-y-1">Go Home</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
