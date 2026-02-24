import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import ProductIcon from "./ProductIcon.js";
import ProductQuantity from "./ProductQuantity.js";
import RecipeSelector from "./RecipeSelector.js";

export default function ProductListItem({
  product,
  quantity,
}: {
  readonly product: string;
  readonly quantity: number;
}) {
  return (
    <PopupState variant="dialog">
      {(popupState) => (
        <>
          <ListItemButton {...bindTrigger(popupState)}>
            <ListItemIcon>
              <ProductIcon product={product} />
            </ListItemIcon>
            <ListItemText
              primary={
                <ProductQuantity
                  product={product}
                  quantity={quantity}
                  hideName
                />
              }
            />
          </ListItemButton>
          <RecipeSelector product={product} {...bindPopover(popupState)} />
        </>
      )}
    </PopupState>
  );
}
