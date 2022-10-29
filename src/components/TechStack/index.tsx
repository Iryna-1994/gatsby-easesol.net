import * as React from "react"

import { Link } from "gatsby";
import TechStackItems from "./tech-stack-items"
import "./styles.css"

const TechStack = (props: any) => {
  const techStack1 = ['Kubernetes', 'Helm', 'Ansible', 'Docker', 'Private Docker Registry', 'Oracle DB', 'F5', 'Mendix', 'Git/SVN', 'Gitlab', 'Chaos engineering', 'SVN'];
  const techStack2 = ['Kubernetes', 'Helm', 'Docker', 'Prometheus', 'Prometheus Alert Manager', 'Grafana', 'Exporters', 'Git', 'Bitbucket', 'Jenkins', 'EKS', 'ECR', 'EC2', 'Terraform', 'S3', 'DynamoDB', 'RDS', 'CloudWatch'];
  const techStack3 = ['AWS EC2', 'ElasticCache', 'ElasticSearch', 'Cloudfront', 'S3', 'CodePipeline', 'CodeCommit', 'CodeBuild', 'Github', 'RDS', 'ECR', 'EKS', 'Docker', 'Magento2'];

  const { caseStack } = props;
  const techStack = caseStack === '1' ? techStack1 : caseStack === '2' ? techStack2 : caseStack === '3' ? techStack3 : techStack1;

  return (
    <section>
      <div className="flex flex-col lg:flex-row">
        <div className="tech-stack-left-box flex flex-wrap gap-x-5 gap-y-3 w-full lg:w-3/5 py-12 px-4 md:px-8 lg:px-16 xl:px-20 bg-slate-700" data-aos="fade-up">
          {
            techStack.map((item) => {
              return (
                <TechStackItems techStacks={item} />
              );
            })
          }
        </div>
        <div className="w-full lg:w-2/5 py-12 px-4 md:px-8 lg:px-12 flex flex-col justify-center gap-y-5 bg-red-600" data-aos="fade-up">
          <p className="text-white">Ready to see what we can do for you?</p>
          <Link to="/hire-us/" className="flex items-center gap-x-3 hover:gap-x-5 duration-300 hover:duration-300 text-white">
            <span>Contact Us</span>
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><rect fill="none" height="24" width="24" /><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TechStack
