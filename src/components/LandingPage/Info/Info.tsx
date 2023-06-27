import { Card, CardContent } from '@mui/material'
import { Header, LongCard, Section, SectionValue, SpanInfo } from './styled'

const Info = () => {
  return (
    <Section>
      <SectionValue>
        <Header>
          Some info about our <SpanInfo>app</SpanInfo>
        </Header>
        <p>
          With our user-friendly interface and powerful features, our Finance
          Tracker Application empowers you to effortlessly track, manage, and
          optimize your finances—all from the palm of your hand. Our application
          caters to your unique financial needs, providing you with a
          comprehensive toolkit to achieve your{' '}
          <SpanInfo> financial goals</SpanInfo>
        </p>
      </SectionValue>
    </Section>
  )
}

export default Info
