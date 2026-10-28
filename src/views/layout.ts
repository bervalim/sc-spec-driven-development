import { header } from './components/header'
import { main } from './components/main'
import { footer } from './components/footer'

export function layout(title: string, content: string): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | AgentClinic</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
${header('AgentClinic')}
${main(content)}
${footer()}
</body>
</html>`
}
