resource "azurerm_resource_group" "web_rg" {
  name     = var.resource_group_name
  location = var.location
}

resource "azurerm_static_web_app" "main_swa" {
  name                = var.swa_name
  resource_group_name = azurerm_resource_group.web_rg.name
  location            = azurerm_resource_group.web_rg.location
  sku                 = var.swa_sku

  site_config {
    # Configuración opcional de la aplicación
  }
}
