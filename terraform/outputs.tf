output "api_key" {
  description = "Deployment token for the Azure Static Web App"
  value       = azurerm_static_web_app.main_swa.api_key
  sensitive   = true
}

output "static_web_app_url" {
  description = "Default hostname of the Azure Static Web App"
  value       = azurerm_static_web_app.main_swa.default_hostname
}
