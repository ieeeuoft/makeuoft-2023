import React from "react";
import Grid from "@material-ui/core/Grid";
import styles from "pages/Inventory/Inventory.module.scss";
import Item from "components/inventory/Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { hardwareSelectors, isLoadingSelector } from "slices/hardware/hardwareSlice";
import { LinearProgress } from "@material-ui/core";
import { setProductOverviewItem } from "slices/ui/uiSlice";
import { Hardware } from "api/types";
import hardwareImagePlaceholder from "assets/images/placeholders/no-hardware-image.svg";

export const InventoryGrid = () => {
    const dispatch = useDispatch();
    const items = useSelector(hardwareSelectors.selectAll);
    const isLoading = useSelector(isLoadingSelector);

    const openProductOverview = (hardware: Hardware) =>
        dispatch(setProductOverviewItem(hardware));

    return isLoading ? (
        <LinearProgress
            style={{ width: "100%", marginBottom: "10px" }}
            data-testid="linear-progress"
        />
    ) : (
        <Grid direction="row" spacing={2} container>
            {items.length > 0 &&
                items.map((item) => (
                    <Grid
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        xl={1}
                        className={styles.Item}
                        key={item.id}
                        item
                        onClick={() => openProductOverview(item)}
                    >
                        <Item
                            image={item.picture ?? hardwareImagePlaceholder}
                            title={item.name}
                            total={item.quantity_available}
                            currentStock={item.quantity_remaining}
                        />
                    </Grid>
                ))}
        </Grid>
    );
};

export default InventoryGrid;
