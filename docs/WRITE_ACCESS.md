# Granting Write Access to GitHub

To let an automated agent (such as Codex) push changes to this repository, authenticate it using a GitHub personal access token (PAT):

1. **Generate a PAT**
   - GitHub → *Settings* → *Developer settings* → *Personal access tokens*.
   - Create a new token with `repo` permissions (read and write).
2. **Configure the environment**
   - Store the token securely, e.g. `export GITHUB_TOKEN="ghp_yourtoken"`.
   - Update the Git remote URL:
     ```bash
     git remote set-url origin https://<token>@github.com/USER/REPO.git
     ```
3. **Test the connection**
   - Commit a change and run `git push origin main` (or your branch).
   - If the push succeeds, write access is configured.

Never share or commit the actual token. Regenerate it if it becomes compromised.
