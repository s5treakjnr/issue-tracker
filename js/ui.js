const injectToHTML = (issues) => {
    let issueGrid = document.getElementById('issue-grid')
    issues.map((issue,index)=> {
        console.log(issue,index)
        var issueCard = document.createElement('div')
        issueCard.className = 'issue-card'
    var output = `<h4>#${index+1} <a href="${issue.html_url}">${issue.title}</a></h4><p>Issue Repo:<a href="${issue.repository_url}">Link</a>Issue author:<a href="${issue.user.html_url}">${issue.user.login}</a>Date:<a href="#">${issue.created_at}</a></p>`
        issueCard.innerHTML=output
        issueGrid.appendChild(issueCard)
    })
}
export default injectToHTML