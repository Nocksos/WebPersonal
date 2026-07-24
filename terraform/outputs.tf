output "api_key" {
  description = "Deployment token for the Azure Static Web App"
  value       = azurerm_static_web_app.main_swa.default_hostname
  sensitive   = true
}
