import type { GameData } from "./types.js";

export const gameData: GameData = {
  categories: {
    buildings: {
      id: "buildings",
      name: "Buildings",
      machines: [
        "maintenance_depot",
        "maintenance_depot",
        "maintenance_depot_basic",
        "maintenance_depot_basic",
        "maintenance_ii_depot",
        "maintenance_ii_depot",
        "maintenance_iii_depot",
        "maintenance_iii_depot",
        "research_lab",
        "research_lab_ii",
        "research_lab_iii",
        "research_lab_iv",
        "research_lab_v",
        "rocket_assembly_depot",
        "rocket_launch_pad",
      ],
      recipes: [
        "maintenance_i",
        "maintenance_i_2",
        "maintenance_i_3",
        "maintenance_i_4",
        "maintenance_i_5",
        "maintenance_i_6",
        "maintenance_ii",
        "maintenance_ii_2",
        "maintenance_ii_3",
        "maintenance_ii_4",
        "maintenance_iii",
        "maintenance_iii_2",
        "maintenance_iii_3",
        "maintenance_iii_4",
        "research_lab_ii",
        "research_lab_iii",
        "research_lab_iv",
        "research_lab_v",
      ],
    },
    buildings_for_vehicles: {
      id: "buildings_for_vehicles",
      name: "Buildings (For Vehicles)",
      machines: [
        "fuel_station",
        "fuel_station_ii",
        "fuel_station_iii",
        "mine_control_tower",
        "vehicles_depot",
        "vehicles_depot_ii",
        "vehicles_depot_iii",
      ],
      recipes: [],
    },
    cargo_docks: {
      id: "cargo_docks",
      name: "Cargo Docks",
      machines: [
        "cargo_depot_2",
        "cargo_depot_4",
        "cargo_depot_6",
        "cargo_depot_8",
        "fluid_module_l",
        "fluid_module_m",
        "fluid_module_s",
        "loose_module_l",
        "loose_module_m",
        "loose_module_s",
        "unit_module_l",
        "unit_module_m",
        "unit_module_s",
      ],
      recipes: [],
    },
    crude_oil_refining: {
      id: "crude_oil_refining",
      name: "Crude Oil Refining",
      machines: [
        "basic_distiller",
        "chemical_plant",
        "chemical_plant_ii",
        "cracking_unit",
        "distillation_stage_i",
        "distillation_stage_ii",
        "distillation_stage_iii",
        "hydrogen_reformer",
        "oil_pump",
        "polymerization_plant",
        "rubber_maker",
        "sour_water_stripper",
      ],
      recipes: [
        "ammonia_synthesis",
        "ammonia_synthesis_2",
        "anesthetics_production",
        "crude_oil_refining",
        "crude_oil_refining_2",
        "diesel_distillation_basic",
        "diesel_reforming",
        "disinfectant_production",
        "disinfectant_production_2",
        "fertilizer_synthesis",
        "fertilizer_synthesis_2",
        "fuel_transesterification",
        "fuel_transesterification_2",
        "fuelgas_reforming",
        "fuelgas_synthesis",
        "graphite_production",
        "graphite_production_2",
        "heavy_distillate_refining",
        "heavyoil_cracking",
        "heavyoil_cracking_2",
        "hydrogen_reforming",
        "liquid_nitrogen_production",
        "liquid_nitrogen_production_2",
        "morphine_production",
        "naphtha_reforming",
        "naphtha_reforming_2",
        "oil_pumping",
        "plastic_making",
        "plastic_making_2",
        "rubber_production",
        "rubber_production_alt",
        "rubber_production_coal",
        "rubber_production_coal_alt",
        "rubber_production_ethanol",
        "sour_water_stripping_recovery",
        "water_desalination_basic",
      ],
    },
    data_center: {
      id: "data_center",
      name: "Data Center",
      machines: ["basic_rack"],
      recipes: ["create_computing_power"],
    },
    food_production: {
      id: "food_production",
      name: "Food Production",
      machines: [
        "baking_unit",
        "chicken_farm",
        "farm",
        "food_processor",
        "greenhouse",
        "greenhouse_ii",
        "irrigated_farm",
        "mill",
      ],
      recipes: [
        "bread_making",
        "cake_production",
        "canola_milling",
        "corn_milling_wet",
        "meat_processing",
        "sausage_processing",
        "snack_production",
        "snack_production_2",
        "soybean_milling",
        "sugar_refining_cane",
        "tofu_making",
        "wheat_milling",
      ],
    },
    general_machines: {
      id: "general_machines",
      name: "General Machines",
      machines: [
        "air_separator",
        "assembly_electric",
        "assembly_electric_ii",
        "assembly_manual",
        "assembly_robotic",
        "assembly_robotic_ii",
        "concrete_mixer",
        "concrete_mixer_ii",
        "concrete_mixer_iii",
        "data_center",
        "electrolyzer",
        "fermentation_tank",
        "microchip_machine",
        "microchip_machine_ii",
        "mixer",
        "settling_tank",
      ],
      recipes: [
        "acid_mixing",
        "air_separation",
        "ammonia_electrolysis",
        "animal_feed_production",
        "animal_feed_production_2",
        "animal_feed_production_3",
        "animal_feed_production_4",
        "antibiotics",
        "brine_electrolysis",
        "brine_production",
        "composing",
        "composing_2",
        "composing_3",
        "concrete_mixing",
        "concrete_mixing_2",
        "concrete_mixing_3",
        "concrete_mixing_4",
        "concrete_mixing_5",
        "concrete_mixing_6",
        "concrete_mixing_7",
        "concrete_mixing_8",
        "consumer_electronics_assembly_t1",
        "cp_assembly_t1",
        "cp_assembly_t2",
        "cp_assembly_t3",
        "cp_assembly_t3_2",
        "cp2_assembly_t1",
        "cp2_assembly_t1_2",
        "cp2_assembly_t2",
        "cp2_assembly_t3",
        "cp3_assembly_t1",
        "cp3_assembly_t2",
        "cp3_assembly_t3",
        "cp4_assembly_t1",
        "cp4_assembly_t2",
        "electronics_2_assembly_t1",
        "electronics_2_assembly_t2",
        "electronics_2_assembly_t3",
        "electronics_3_assembly_t1",
        "electronics_3_assembly_t2",
        "electronics_3_assembly_t3",
        "electronics_assembly_t1",
        "electronics_assembly_t2",
        "electronics_assembly_t3",
        "electronics_assembly_t4",
        "electronics_assembly_t5",
        "ethanol_making_corn",
        "ethanol_making_sugar",
        "fertilizer_ii_synthesis",
        "fertilizer_mixing",
        "filter_media_mixing",
        "fluoride_leaching",
        "food_pack_assembly_eggs",
        "food_pack_assembly_meat",
        "glass_mix_mixing",
        "glass_mix_mixing_2",
        "gold_settling",
        "household_appliances_assembly_t1",
        "household_appliances_assembly_t2",
        "household_appliances_assembly_t3",
        "household_goods_assembly_t1",
        "household_goods_assembly_t2",
        "household_goods_assembly_t3",
        "lab_equipment_2_assembly_t2",
        "lab_equipment_2_assembly_t3",
        "lab_equipment_4_assembly_t2",
        "lab_equipment_4_assembly_t3",
        "lab_equipment_assembly_t1",
        "lab_equipment_assembly_t1_2",
        "lab_equipment_assembly_t2",
        "lab_equipment_assembly_t2_2",
        "lab_equipment_assembly_t3",
        "mech._parts_assembly_t1",
        "mech._parts_assembly_t2",
        "mech._parts_assembly_t3-1",
        "mech._parts_assembly_t3-2",
        "mech._parts_assembly_t4",
        "medical_equipment_assembly_t1",
        "medical_equipment_assembly_t2",
        "medical_supplies_assembly_t1",
        "medical_supplies_assembly_t1_2",
        "medical_supplies_assembly_t2",
        "medical_supplies_assembly_t2_2",
        "medical_supplies_iii_assembly_t1",
        "medical_supplies_iii_assembly_t2",
        "microchip_manufacturing_final_stage",
        "microchip_manufacturing_final_stage_2",
        "microchip_manufacturing_stage_1a",
        "microchip_manufacturing_stage_1a_2",
        "microchip_manufacturing_stage_1b",
        "microchip_manufacturing_stage_1b_2",
        "microchip_manufacturing_stage_1c",
        "microchip_manufacturing_stage_1c_2",
        "microchip_manufacturing_stage_1d",
        "microchip_manufacturing_stage_1d_2",
        "microchip_manufacturing_stage_2a",
        "microchip_manufacturing_stage_2a_2",
        "microchip_manufacturing_stage_2b",
        "microchip_manufacturing_stage_2b_2",
        "microchip_manufacturing_stage_2c",
        "microchip_manufacturing_stage_2c_2",
        "microchip_manufacturing_stage_2d",
        "microchip_manufacturing_stage_2d_2",
        "microchip_manufacturing_stage_3a",
        "microchip_manufacturing_stage_3a_2",
        "microchip_manufacturing_stage_3b",
        "microchip_manufacturing_stage_3b_2",
        "microchip_manufacturing_stage_3c",
        "microchip_manufacturing_stage_3c_2",
        "pcb_assembly_t1",
        "pcb_assembly_t2",
        "pcb_assembly_t3",
        "server_assembly_t1",
        "server_assembly_t2",
        "server_assembly_t3",
        "solar_cell_assembly",
        "solar_cell_assembly_2",
        "solar_cell_assembly_3",
        "solar_cell_assembly_4",
        "sulfur_neutralization",
        "uranium_leaching",
        "uranium_rods_t1",
        "vehicle_parts_2_assembly_t1",
        "vehicle_parts_2_assembly_t2",
        "vehicle_parts_3_assembly_t1",
        "vehicle_parts_3_assembly_t2",
        "vehicle_parts_assembly_t1",
        "vehicle_parts_assembly_t2",
        "vehicle_parts_assembly_t3",
        "vehicle_parts_assembly_t4",
        "water_electrolysis",
      ],
    },
    housing_and_services: {
      id: "housing_and_services",
      name: "Housing & Services",
      machines: [
        "biomass_collection",
        "consumer_electronics_module",
        "food_market",
        "food_market_ii",
        "household_appliances_module",
        "household_goods_module",
        "housing",
        "housing_ii",
        "housing_iii",
        "recyclables_collection",
        "waste_collection",
        "water_facility",
      ],
      recipes: [],
    },
    metallurgy_and_smelting: {
      id: "metallurgy_and_smelting",
      name: "Metallurgy & Smelting",
      machines: [
        "arc_furnace",
        "arc_furnace_ii",
        "blast_furnace",
        "blast_furnace_ii",
        "coal_maker",
        "cooled_caster",
        "cooled_caster_ii",
        "copper_electrolysis",
        "crusher",
        "glass_maker",
        "glass_maker_ii",
        "gold_furnace",
        "metal_caster",
        "metal_caster_ii",
        "oxygen_furnace",
        "oxygen_furnace_ii",
        "rotary_kiln",
        "rotary_kiln_gas",
        "silicon_crystallizer",
        "silicon_reactor",
      ],
      recipes: [
        "cement_production",
        "cement_production_2",
        "cement_production_3",
        "charcoal_making",
        "copper_casting",
        "copper_casting_2",
        "copper_ore_crushing",
        "copper_purification_acid",
        "copper_purification_water",
        "copper_scrap_smelting",
        "copper_scrap_smelting_2",
        "copper_scrap_smelting_arc",
        "copper_smelting",
        "copper_smelting_arc",
        "copper_smelting_sand",
        "glass_broken_smelting",
        "glass_broken_smelting_2",
        "glass_casting",
        "glass_casting_2",
        "glass_smelting",
        "glass_smelting_2",
        "glass_smelting_3",
        "glass_smelting_4",
        "gold_ore_crushing",
        "gold_ore_milling",
        "gold_smelting",
        "gold_smelting_2",
        "gravel_crushing",
        "iron_casting",
        "iron_casting_2",
        "iron_ore_crushing",
        "iron_scrap_smelting",
        "iron_scrap_smelting_2",
        "iron_scrap_smelting_arc",
        "iron_smelting",
        "iron_smelting_arc",
        "iron_smelting_lime",
        "rock_crushing",
        "silicon_crystallization",
        "silicon_smelting_arc",
        "silicon_smelting_arc_ii",
        "silicon_treatment",
        "slag_crushing",
        "steel_casting_cooled",
        "steel_casting_cooled_2",
        "steel_smelting",
        "steel_smelting_2",
        "uranium_crushing",
      ],
    },
    mines: {
      id: "mines",
      name: "Mines",
      machines: [
        "coal_mine",
        "copper_mine",
        "dirt_mine",
        "gold_mine",
        "gravel_mine",
        "iron_mine",
        "limestone_mine",
        "rock_mine",
        "sand_mine",
        "slag_crushed_mine",
        "slag_mine",
        "waste_mine",
      ],
      recipes: [
        "coal_mining",
        "copper_mining",
        "dirt_mining",
        "gold_mining",
        "gravel_mining",
        "iron_mining",
        "limestone_mining",
        "rock_mining",
        "sand_mining",
        "slag_crushed_mining",
        "slag_mining",
        "waste_mining",
      ],
    },
    power_production: {
      id: "power_production",
      name: "Power Production",
      machines: [
        "diesel_generator",
        "enrichment_plant",
        "high-pressure_turbine",
        "high-pressure_turbine_ii",
        "low-pressure_turbine",
        "low-pressure_turbine_ii",
        "nuclear_reactor",
        "power_generator",
        "power_generator_ii",
        "solar_panel",
        "solar_panel_mono",
      ],
      recipes: [
        "dieselgenerator",
        "nuclearreactor",
        "powergeneratort1",
        "powergeneratort2",
        "turbinehighpress",
        "turbinehighpresst2",
        "turbinelowpress",
        "turbinelowpresst2",
        "uranium_enrichment",
      ],
    },
    storage: {
      id: "storage",
      name: "Storage",
      machines: [
        "fluid_storage",
        "fluid_storage",
        "fluid_storage_ii",
        "fluid_storage_ii",
        "fluid_storage_iii",
        "fluid_storage_iii",
        "fluid_storage_iv",
        "fluid_storage_iv",
        "loose_storage",
        "loose_storage",
        "loose_storage_ii",
        "loose_storage_ii",
        "loose_storage_iii",
        "loose_storage_iii",
        "loose_storage_iv",
        "loose_storage_iv",
        "spent_fuel_storage",
        "spent_fuel_storage",
        "spent_fuel_storage",
        "unit_storage",
        "unit_storage",
        "unit_storage_ii",
        "unit_storage_ii",
        "unit_storage_iii",
        "unit_storage_iii",
        "unit_storage_iv",
        "unit_storage_iv",
      ],
      recipes: [
        "acid_storage",
        "acid_storage_2",
        "acid_storage_3",
        "acid_storage_4",
        "ammonia_storage",
        "ammonia_storage_2",
        "ammonia_storage_3",
        "ammonia_storage_4",
        "anesthetics_storage",
        "anesthetics_storage_2",
        "anesthetics_storage_3",
        "anesthetics_storage_4",
        "anesthetics_storage_5",
        "animal_feed_storage",
        "animal_feed_storage_2",
        "animal_feed_storage_3",
        "animal_feed_storage_4",
        "antibiotics_storage",
        "antibiotics_storage_2",
        "antibiotics_storage_3",
        "antibiotics_storage_4",
        "antibiotics_storage_5",
        "biomass_storage",
        "biomass_storage_2",
        "biomass_storage_3",
        "biomass_storage_4",
        "bread_storage",
        "bread_storage_2",
        "bread_storage_3",
        "bread_storage_4",
        "bread_storage_5",
        "brine_storage",
        "brine_storage_2",
        "brine_storage_3",
        "brine_storage_4",
        "broken_glass_storage",
        "broken_glass_storage_2",
        "broken_glass_storage_3",
        "broken_glass_storage_4",
        "cake_storage",
        "cake_storage_2",
        "cake_storage_3",
        "cake_storage_4",
        "cake_storage_5",
        "canola_storage",
        "canola_storage_2",
        "canola_storage_3",
        "canola_storage_4",
        "carbon_dioxide_storage",
        "carbon_dioxide_storage_2",
        "carbon_dioxide_storage_3",
        "carbon_dioxide_storage_4",
        "cement_storage",
        "cement_storage_2",
        "cement_storage_3",
        "cement_storage_4",
        "cement_storage_5",
        "chicken_carcass_storage",
        "chicken_carcass_storage_2",
        "chicken_carcass_storage_3",
        "chicken_carcass_storage_4",
        "chicken_carcass_storage_5",
        "chilled_water_storage",
        "chilled_water_storage_2",
        "chilled_water_storage_3",
        "chilled_water_storage_4",
        "chlorine_storage",
        "chlorine_storage_2",
        "chlorine_storage_3",
        "chlorine_storage_4",
        "coal_storage",
        "coal_storage_2",
        "coal_storage_3",
        "coal_storage_4",
        "compost_storage",
        "compost_storage_2",
        "compost_storage_3",
        "compost_storage_4",
        "concrete_slab_storage",
        "concrete_slab_storage_2",
        "concrete_slab_storage_3",
        "concrete_slab_storage_4",
        "concrete_slab_storage_5",
        "construction_parts_ii_storage",
        "construction_parts_ii_storage_2",
        "construction_parts_ii_storage_3",
        "construction_parts_ii_storage_4",
        "construction_parts_ii_storage_5",
        "construction_parts_iii_storage",
        "construction_parts_iii_storage_2",
        "construction_parts_iii_storage_3",
        "construction_parts_iii_storage_4",
        "construction_parts_iii_storage_5",
        "construction_parts_iv_storage",
        "construction_parts_iv_storage_2",
        "construction_parts_iv_storage_3",
        "construction_parts_iv_storage_4",
        "construction_parts_iv_storage_5",
        "construction_parts_storage",
        "construction_parts_storage_2",
        "construction_parts_storage_3",
        "construction_parts_storage_4",
        "construction_parts_storage_5",
        "consumer_electronics_storage",
        "consumer_electronics_storage_2",
        "consumer_electronics_storage_3",
        "consumer_electronics_storage_4",
        "consumer_electronics_storage_5",
        "cooking_oil_storage",
        "cooking_oil_storage_2",
        "cooking_oil_storage_3",
        "cooking_oil_storage_4",
        "copper_ore_crushed_storage",
        "copper_ore_crushed_storage_2",
        "copper_ore_crushed_storage_3",
        "copper_ore_crushed_storage_4",
        "copper_ore_storage",
        "copper_ore_storage_2",
        "copper_ore_storage_3",
        "copper_ore_storage_4",
        "copper_scrap_storage",
        "copper_scrap_storage_2",
        "copper_scrap_storage_3",
        "copper_scrap_storage_4",
        "copper_storage",
        "copper_storage_2",
        "copper_storage_3",
        "copper_storage_4",
        "copper_storage_5",
        "corn_mash_storage",
        "corn_mash_storage_2",
        "corn_mash_storage_3",
        "corn_mash_storage_4",
        "corn_storage",
        "corn_storage_2",
        "corn_storage_3",
        "corn_storage_4",
        "crude_oil_storage",
        "crude_oil_storage_2",
        "crude_oil_storage_3",
        "crude_oil_storage_4",
        "diesel_storage",
        "diesel_storage_2",
        "diesel_storage_3",
        "diesel_storage_4",
        "dirt_storage",
        "dirt_storage_2",
        "dirt_storage_3",
        "dirt_storage_4",
        "disinfectant_storage",
        "disinfectant_storage_2",
        "disinfectant_storage_3",
        "disinfectant_storage_4",
        "disinfectant_storage_5",
        "eggs_storage",
        "eggs_storage_2",
        "eggs_storage_3",
        "eggs_storage_4",
        "eggs_storage_5",
        "electronics_ii_storage",
        "electronics_ii_storage_2",
        "electronics_ii_storage_3",
        "electronics_ii_storage_4",
        "electronics_ii_storage_5",
        "electronics_iii_storage",
        "electronics_iii_storage_2",
        "electronics_iii_storage_3",
        "electronics_iii_storage_4",
        "electronics_iii_storage_5",
        "electronics_storage",
        "electronics_storage_2",
        "electronics_storage_3",
        "electronics_storage_4",
        "electronics_storage_5",
        "ethanol_storage",
        "ethanol_storage_2",
        "ethanol_storage_3",
        "ethanol_storage_4",
        "exhaust_storage",
        "exhaust_storage_2",
        "exhaust_storage_3",
        "exhaust_storage_4",
        "fertilizer_i_storage",
        "fertilizer_i_storage_2",
        "fertilizer_i_storage_3",
        "fertilizer_i_storage_4",
        "fertilizer_ii_storage",
        "fertilizer_ii_storage_2",
        "fertilizer_ii_storage_3",
        "fertilizer_ii_storage_4",
        "fertilizer_organic_storage",
        "fertilizer_organic_storage_2",
        "fertilizer_organic_storage_3",
        "fertilizer_organic_storage_4",
        "filter_media_storage",
        "filter_media_storage_2",
        "filter_media_storage_3",
        "filter_media_storage_4",
        "flour_storage",
        "flour_storage_2",
        "flour_storage_3",
        "flour_storage_4",
        "flour_storage_5",
        "flowers_storage",
        "flowers_storage_2",
        "flowers_storage_3",
        "flowers_storage_4",
        "flowers_storage_5",
        "food_pack_storage",
        "food_pack_storage_2",
        "food_pack_storage_3",
        "food_pack_storage_4",
        "food_pack_storage_5",
        "fruit_storage",
        "fruit_storage_2",
        "fruit_storage_3",
        "fruit_storage_4",
        "fruit_storage_5",
        "fuel_gas_storage",
        "fuel_gas_storage_2",
        "fuel_gas_storage_3",
        "fuel_gas_storage_4",
        "glass_mix_storage",
        "glass_mix_storage_2",
        "glass_mix_storage_3",
        "glass_mix_storage_4",
        "glass_storage",
        "glass_storage_2",
        "glass_storage_3",
        "glass_storage_4",
        "glass_storage_5",
        "gold_ore_concentrate_storage",
        "gold_ore_concentrate_storage_2",
        "gold_ore_concentrate_storage_3",
        "gold_ore_concentrate_storage_4",
        "gold_ore_crushed_storage",
        "gold_ore_crushed_storage_2",
        "gold_ore_crushed_storage_3",
        "gold_ore_crushed_storage_4",
        "gold_ore_powder_storage",
        "gold_ore_powder_storage_2",
        "gold_ore_powder_storage_3",
        "gold_ore_powder_storage_4",
        "gold_ore_storage",
        "gold_ore_storage_2",
        "gold_ore_storage_3",
        "gold_ore_storage_4",
        "gold_scrap_storage",
        "gold_scrap_storage_2",
        "gold_scrap_storage_3",
        "gold_scrap_storage_4",
        "gold_storage",
        "gold_storage_2",
        "gold_storage_3",
        "gold_storage_4",
        "gold_storage_5",
        "graphite_storage",
        "graphite_storage_2",
        "graphite_storage_3",
        "graphite_storage_4",
        "graphite_storage_5",
        "gravel_storage",
        "gravel_storage_2",
        "gravel_storage_3",
        "gravel_storage_4",
        "heavy_oil_storage",
        "heavy_oil_storage_2",
        "heavy_oil_storage_3",
        "heavy_oil_storage_4",
        "household_appliances_storage",
        "household_appliances_storage_2",
        "household_appliances_storage_3",
        "household_appliances_storage_4",
        "household_appliances_storage_5",
        "household_goods_storage",
        "household_goods_storage_2",
        "household_goods_storage_3",
        "household_goods_storage_4",
        "household_goods_storage_5",
        "hydrogen_fluoride_storage",
        "hydrogen_fluoride_storage_2",
        "hydrogen_fluoride_storage_3",
        "hydrogen_fluoride_storage_4",
        "hydrogen_storage",
        "hydrogen_storage_2",
        "hydrogen_storage_3",
        "hydrogen_storage_4",
        "impure_copper_storage",
        "impure_copper_storage_2",
        "impure_copper_storage_3",
        "impure_copper_storage_4",
        "impure_copper_storage_5",
        "iron_ore_crushed_storage",
        "iron_ore_crushed_storage_2",
        "iron_ore_crushed_storage_3",
        "iron_ore_crushed_storage_4",
        "iron_ore_storage",
        "iron_ore_storage_2",
        "iron_ore_storage_3",
        "iron_ore_storage_4",
        "iron_scrap_storage",
        "iron_scrap_storage_2",
        "iron_scrap_storage_3",
        "iron_scrap_storage_4",
        "iron_storage",
        "iron_storage_2",
        "iron_storage_3",
        "iron_storage_4",
        "iron_storage_5",
        "lab_equipment_ii_storage",
        "lab_equipment_ii_storage_2",
        "lab_equipment_ii_storage_3",
        "lab_equipment_ii_storage_4",
        "lab_equipment_ii_storage_5",
        "lab_equipment_iii_storage",
        "lab_equipment_iii_storage_2",
        "lab_equipment_iii_storage_3",
        "lab_equipment_iii_storage_4",
        "lab_equipment_iii_storage_5",
        "lab_equipment_iv_storage",
        "lab_equipment_iv_storage_2",
        "lab_equipment_iv_storage_3",
        "lab_equipment_iv_storage_4",
        "lab_equipment_iv_storage_5",
        "lab_equipment_storage",
        "lab_equipment_storage_2",
        "lab_equipment_storage_3",
        "lab_equipment_storage_4",
        "lab_equipment_storage_5",
        "light_oil_storage",
        "light_oil_storage_2",
        "light_oil_storage_3",
        "light_oil_storage_4",
        "limestone_storage",
        "limestone_storage_2",
        "limestone_storage_3",
        "limestone_storage_4",
        "liquid_nitrogen_storage",
        "liquid_nitrogen_storage_2",
        "liquid_nitrogen_storage_3",
        "liquid_nitrogen_storage_4",
        "liquid_nitrogen_storage_5",
        "meat_storage",
        "meat_storage_2",
        "meat_storage_3",
        "meat_storage_4",
        "meat_storage_5",
        "meat_trimmings_storage",
        "meat_trimmings_storage_2",
        "meat_trimmings_storage_3",
        "meat_trimmings_storage_4",
        "mechanical_parts_storage",
        "mechanical_parts_storage_2",
        "mechanical_parts_storage_3",
        "mechanical_parts_storage_4",
        "mechanical_parts_storage_5",
        "medical_equipment_storage",
        "medical_equipment_storage_2",
        "medical_equipment_storage_3",
        "medical_equipment_storage_4",
        "medical_equipment_storage_5",
        "medical_supplies_ii_storage",
        "medical_supplies_ii_storage_2",
        "medical_supplies_ii_storage_3",
        "medical_supplies_ii_storage_4",
        "medical_supplies_ii_storage_5",
        "medical_supplies_iii_storage",
        "medical_supplies_iii_storage_2",
        "medical_supplies_iii_storage_3",
        "medical_supplies_iii_storage_4",
        "medical_supplies_iii_storage_5",
        "medical_supplies_storage",
        "medical_supplies_storage_2",
        "medical_supplies_storage_3",
        "medical_supplies_storage_4",
        "medical_supplies_storage_5",
        "medium_oil_storage",
        "medium_oil_storage_2",
        "medium_oil_storage_3",
        "medium_oil_storage_4",
        "microchips_stage_1_a_storage",
        "microchips_stage_1_a_storage_2",
        "microchips_stage_1_a_storage_3",
        "microchips_stage_1_a_storage_4",
        "microchips_stage_1_a_storage_5",
        "microchips_stage_1_b_storage",
        "microchips_stage_1_b_storage_2",
        "microchips_stage_1_b_storage_3",
        "microchips_stage_1_b_storage_4",
        "microchips_stage_1_b_storage_5",
        "microchips_stage_1_c_storage",
        "microchips_stage_1_c_storage_2",
        "microchips_stage_1_c_storage_3",
        "microchips_stage_1_c_storage_4",
        "microchips_stage_1_c_storage_5",
        "microchips_stage_2_a_storage",
        "microchips_stage_2_a_storage_2",
        "microchips_stage_2_a_storage_3",
        "microchips_stage_2_a_storage_4",
        "microchips_stage_2_a_storage_5",
        "microchips_stage_2_b_storage",
        "microchips_stage_2_b_storage_2",
        "microchips_stage_2_b_storage_3",
        "microchips_stage_2_b_storage_4",
        "microchips_stage_2_b_storage_5",
        "microchips_stage_2_c_storage",
        "microchips_stage_2_c_storage_2",
        "microchips_stage_2_c_storage_3",
        "microchips_stage_2_c_storage_4",
        "microchips_stage_2_c_storage_5",
        "microchips_stage_3_a_storage",
        "microchips_stage_3_a_storage_2",
        "microchips_stage_3_a_storage_3",
        "microchips_stage_3_a_storage_4",
        "microchips_stage_3_a_storage_5",
        "microchips_stage_3_b_storage",
        "microchips_stage_3_b_storage_2",
        "microchips_stage_3_b_storage_3",
        "microchips_stage_3_b_storage_4",
        "microchips_stage_3_b_storage_5",
        "microchips_stage_3_c_storage",
        "microchips_stage_3_c_storage_2",
        "microchips_stage_3_c_storage_3",
        "microchips_stage_3_c_storage_4",
        "microchips_stage_3_c_storage_5",
        "microchips_stage_4_a_storage",
        "microchips_stage_4_a_storage_2",
        "microchips_stage_4_a_storage_3",
        "microchips_stage_4_a_storage_4",
        "microchips_stage_4_a_storage_5",
        "microchips_stage_4_b_storage",
        "microchips_stage_4_b_storage_2",
        "microchips_stage_4_b_storage_3",
        "microchips_stage_4_b_storage_4",
        "microchips_stage_4_b_storage_5",
        "microchips_storage",
        "microchips_storage_2",
        "microchips_storage_3",
        "microchips_storage_4",
        "microchips_storage_5",
        "morphine_storage",
        "morphine_storage_2",
        "morphine_storage_3",
        "morphine_storage_4",
        "morphine_storage_5",
        "naphtha_storage",
        "naphtha_storage_2",
        "naphtha_storage_3",
        "naphtha_storage_4",
        "nitrogen_storage",
        "nitrogen_storage_2",
        "nitrogen_storage_3",
        "nitrogen_storage_4",
        "oxygen_storage",
        "oxygen_storage_2",
        "oxygen_storage_3",
        "oxygen_storage_4",
        "pcb_storage",
        "pcb_storage_2",
        "pcb_storage_3",
        "pcb_storage_4",
        "pcb_storage_5",
        "plastic_storage",
        "plastic_storage_2",
        "plastic_storage_3",
        "plastic_storage_4",
        "plastic_storage_5",
        "poppy_storage",
        "poppy_storage_2",
        "poppy_storage_3",
        "poppy_storage_4",
        "potato_storage",
        "potato_storage_2",
        "potato_storage_3",
        "potato_storage_4",
        "quartz_storage",
        "quartz_storage_2",
        "quartz_storage_3",
        "quartz_storage_4",
        "recyclables_storage",
        "recyclables_storage_2",
        "recyclables_storage_3",
        "recyclables_storage_4",
        "rock_storage",
        "rock_storage_2",
        "rock_storage_3",
        "rock_storage_4",
        "rubber_storage",
        "rubber_storage_2",
        "rubber_storage_3",
        "rubber_storage_4",
        "rubber_storage_5",
        "salt_storage",
        "salt_storage_2",
        "salt_storage_3",
        "salt_storage_4",
        "sand_storage",
        "sand_storage_2",
        "sand_storage_3",
        "sand_storage_4",
        "sausage_storage",
        "sausage_storage_2",
        "sausage_storage_3",
        "sausage_storage_4",
        "sausage_storage_5",
        "seawater_storage",
        "seawater_storage_2",
        "seawater_storage_3",
        "seawater_storage_4",
        "server_storage",
        "server_storage_2",
        "server_storage_3",
        "server_storage_4",
        "server_storage_5",
        "silicon_poly_storage",
        "silicon_poly_storage_2",
        "silicon_poly_storage_3",
        "silicon_poly_storage_4",
        "silicon_poly_storage_5",
        "silicon_wafer_storage",
        "silicon_wafer_storage_2",
        "silicon_wafer_storage_3",
        "silicon_wafer_storage_4",
        "silicon_wafer_storage_5",
        "slag_crushed_storage",
        "slag_crushed_storage_2",
        "slag_crushed_storage_3",
        "slag_crushed_storage_4",
        "slag_storage",
        "slag_storage_2",
        "slag_storage_3",
        "slag_storage_4",
        "sludge_storage",
        "sludge_storage_2",
        "sludge_storage_3",
        "sludge_storage_4",
        "snack_storage",
        "snack_storage_2",
        "snack_storage_3",
        "snack_storage_4",
        "snack_storage_5",
        "solar_cell_mono_storage",
        "solar_cell_mono_storage_2",
        "solar_cell_mono_storage_3",
        "solar_cell_mono_storage_4",
        "solar_cell_mono_storage_5",
        "solar_cell_storage",
        "solar_cell_storage_2",
        "solar_cell_storage_3",
        "solar_cell_storage_4",
        "solar_cell_storage_5",
        "sour_water_storage",
        "sour_water_storage_2",
        "sour_water_storage_3",
        "sour_water_storage_4",
        "soybean_storage",
        "soybean_storage_2",
        "soybean_storage_3",
        "soybean_storage_4",
        "spent_fuel_storage",
        "spent_fuel_storage_2",
        "spent_fuel_storage_3",
        "spent_fuel_storage_4",
        "spent_fuel_storage_5",
        "steam_depleted_storage",
        "steam_depleted_storage_2",
        "steam_depleted_storage_3",
        "steam_depleted_storage_4",
        "steam_hi_storage",
        "steam_hi_storage_2",
        "steam_hi_storage_3",
        "steam_hi_storage_4",
        "steam_lo_storage",
        "steam_lo_storage_2",
        "steam_lo_storage_3",
        "steam_lo_storage_4",
        "steel_storage",
        "steel_storage_2",
        "steel_storage_3",
        "steel_storage_4",
        "steel_storage_5",
        "sugar_cane_storage",
        "sugar_cane_storage_2",
        "sugar_cane_storage_3",
        "sugar_cane_storage_4",
        "sugar_storage",
        "sugar_storage_2",
        "sugar_storage_3",
        "sugar_storage_4",
        "sulfur_storage",
        "sulfur_storage_2",
        "sulfur_storage_3",
        "sulfur_storage_4",
        "tofu_storage",
        "tofu_storage_2",
        "tofu_storage_3",
        "tofu_storage_4",
        "tofu_storage_5",
        "toxic_slurry_storage",
        "toxic_slurry_storage_2",
        "toxic_slurry_storage_3",
        "toxic_slurry_storage_4",
        "uranium_ore_crushed_storage",
        "uranium_ore_crushed_storage_2",
        "uranium_ore_crushed_storage_3",
        "uranium_ore_crushed_storage_4",
        "uranium_ore_storage",
        "uranium_ore_storage_2",
        "uranium_ore_storage_3",
        "uranium_ore_storage_4",
        "uranium_pellets_storage",
        "uranium_pellets_storage_2",
        "uranium_pellets_storage_3",
        "uranium_pellets_storage_4",
        "uranium_pellets_storage_5",
        "uranium_rod_storage",
        "uranium_rod_storage_2",
        "uranium_rod_storage_3",
        "uranium_rod_storage_4",
        "uranium_rod_storage_5",
        "vegetables_storage",
        "vegetables_storage_2",
        "vegetables_storage_3",
        "vegetables_storage_4",
        "vegetables_storage_5",
        "vehicle_parts_ii_storage",
        "vehicle_parts_ii_storage_2",
        "vehicle_parts_ii_storage_3",
        "vehicle_parts_ii_storage_4",
        "vehicle_parts_ii_storage_5",
        "vehicle_parts_iii_storage",
        "vehicle_parts_iii_storage_2",
        "vehicle_parts_iii_storage_3",
        "vehicle_parts_iii_storage_4",
        "vehicle_parts_iii_storage_5",
        "vehicle_parts_storage",
        "vehicle_parts_storage_2",
        "vehicle_parts_storage_3",
        "vehicle_parts_storage_4",
        "vehicle_parts_storage_5",
        "waste_storage",
        "waste_storage_2",
        "waste_storage_3",
        "waste_storage_4",
        "waste_water_storage",
        "waste_water_storage_2",
        "waste_water_storage_3",
        "waste_water_storage_4",
        "water_storage",
        "water_storage_2",
        "water_storage_3",
        "water_storage_4",
        "wheat_storage",
        "wheat_storage_2",
        "wheat_storage_3",
        "wheat_storage_4",
        "wood_storage",
        "wood_storage_2",
        "wood_storage_3",
        "wood_storage_4",
        "wood_storage_5",
        "yellow_cake_storage",
        "yellow_cake_storage_2",
        "yellow_cake_storage_3",
        "yellow_cake_storage_4",
      ],
    },
    waste_management: {
      id: "waste_management",
      name: "Waste Management",
      machines: [
        "anaerobic_digester",
        "burner_solid",
        "exhaust_scrubber",
        "flare",
        "gas_injection_pump",
        "liquid_dump",
        "smoke_stack",
        "smoke_stack_large",
        "waste_sorting_plant",
        "wastewater_treatment",
      ],
      recipes: [
        "acid_dumping",
        "ammonia_disposal",
        "brine_dumping",
        "burning",
        "burning_2",
        "burning_3",
        "burning_4",
        "burning_5",
        "burning_6",
        "burning_7",
        "co2_injection",
        "diesel_disposal",
        "digestion",
        "digestion_2",
        "digestion_3",
        "digestion_4",
        "ethanol_disposal",
        "exhaust_filtering",
        "fuel_gas_disposal",
        "heavy_oil_disposal",
        "hydrogen_disposal",
        "light_oil_disposal",
        "naphtha_disposal",
        "product_disposal",
        "product_disposal_10",
        "product_disposal_11",
        "product_disposal_12",
        "product_disposal_13",
        "product_disposal_14",
        "product_disposal_2",
        "product_disposal_3",
        "product_disposal_4",
        "product_disposal_5",
        "product_disposal_6",
        "product_disposal_7",
        "product_disposal_8",
        "product_disposal_9",
        "seawater_dumping",
        "sour_water_dumping",
        "toxic_slurry_dumping",
        "toxic_slurry_treatment",
        "waste_water_dumping",
        "wastesortingplant",
        "water_dumping",
        "water_treatment",
        "water_treatment_advanced",
      ],
    },
    water_extraction_and_processing: {
      id: "water_extraction_and_processing",
      name: "Water Extraction & Processing",
      machines: [
        "boiler_coal",
        "boiler_electric",
        "boiler_gas",
        "cooling_tower",
        "cooling_tower_large",
        "evaporation_pond",
        "evaporation_pond_heated",
        "groundwater_pump",
        "rainwater_harvester",
        "seawater_pump",
        "seawater_pump_tall",
        "thermal_desalinator",
        "water_chiller",
      ],
      recipes: [
        "brine_making",
        "brine_making_2",
        "depleted_steam_condensation",
        "depleted_steam_condensation_2",
        "hi-press_steam_condensation",
        "hi-press_steam_condensation_2",
        "lo-press_steam_condensation",
        "lo-press_steam_condensation_2",
        "ocean_water_pumping",
        "ocean_water_pumping_ii",
        "salt_making",
        "salt_making_2",
        "salt_making_3",
        "salt_making_4",
        "steam_generation",
        "steam_generation_10",
        "steam_generation_11",
        "steam_generation_2",
        "steam_generation_3",
        "steam_generation_4",
        "steam_generation_5",
        "steam_generation_6",
        "steam_generation_7",
        "steam_generation_8",
        "steam_generation_9",
        "thermal_desalination",
        "thermal_desalination_2",
        "thermal_desalination_3",
        "water_cooling",
        "water_pumping",
      ],
    },
  },
  machines: {
    air_separator: {
      id: "air_separator",
      icon: "AirSeparator.png",
      name: "Air Separator",
      workers: 6,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: -60,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 100,
        },
      ],
      recipes: ["air_separation"],
      products: {
        input: [],
        output: ["nitrogen", "oxygen"],
      },
    },
    anaerobic_digester: {
      id: "anaerobic_digester",
      icon: "AnaerobicDigester.png",
      name: "Anaerobic Digester",
      workers: 4,
      category: "waste_management",
      maintenance: {
        type: "1",
        quantity: 1,
      },
      electricityProduction: -10,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 50,
        },
      ],
      recipes: ["digestion", "digestion_2", "digestion_3", "digestion_4"],
      products: {
        input: ["meat_trimmings", "potato", "sludge", "wheat"],
        output: ["compost", "fuel_gas"],
      },
    },
    arc_furnace: {
      id: "arc_furnace",
      icon: "ArcFurnace.png",
      name: "Arc Furnace",
      workers: 8,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -750,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 160,
        },
      ],
      recipes: ["silicon_smelting_arc"],
      products: {
        input: ["coal", "graphite", "quartz"],
        output: ["exhaust", "molten_silicon", "slag"],
      },
    },
    arc_furnace_ii: {
      id: "arc_furnace_ii",
      icon: "ArcFurnace2.png",
      name: "Arc Furnace II",
      workers: 18,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "2",
        quantity: 4,
      },
      electricityProduction: -1400,
      computingProduction: -6,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 140,
        },
      ],
      recipes: [
        "copper_scrap_smelting_arc",
        "copper_smelting_arc",
        "glass_smelting_3",
        "glass_smelting_4",
        "iron_scrap_smelting_arc",
        "iron_smelting_arc",
        "silicon_smelting_arc_ii",
      ],
      products: {
        input: [
          "broken_glass",
          "coal",
          "copper_ore_crushed",
          "copper_scrap",
          "glass_mix",
          "graphite",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "quartz",
          "sand",
          "water",
        ],
        output: [
          "exhaust",
          "molten_copper",
          "molten_glass",
          "molten_iron",
          "molten_silicon",
          "slag",
          "steam_hi",
          "steam_lo",
        ],
      },
    },
    assembly_electric: {
      id: "assembly_electric",
      icon: "AssemblyElectrified.png",
      name: "Assembly (Electric)",
      workers: 6,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 30,
        },
      ],
      recipes: [
        "cp_assembly_t2",
        "cp2_assembly_t1_2",
        "cp3_assembly_t1",
        "electronics_assembly_t2",
        "household_goods_assembly_t1",
        "lab_equipment_assembly_t1",
        "mech._parts_assembly_t2",
        "vehicle_parts_assembly_t2",
      ],
      products: {
        input: [
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "copper",
          "electronics",
          "glass",
          "iron",
          "mechanical_parts",
          "rubber",
          "steel",
          "wood",
        ],
        output: [
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "electronics",
          "household_goods",
          "lab_equipment",
          "mechanical_parts",
          "vehicle_parts",
        ],
      },
    },
    assembly_electric_ii: {
      id: "assembly_electric_ii",
      icon: "AssemblyElectrifiedT2.png",
      name: "Assembly (Electric) II",
      workers: 8,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -30,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: [
        "cp_assembly_t3",
        "cp2_assembly_t2",
        "cp3_assembly_t2",
        "electronics_2_assembly_t1",
        "electronics_3_assembly_t1",
        "electronics_assembly_t3",
        "food_pack_assembly_eggs",
        "food_pack_assembly_meat",
        "household_appliances_assembly_t1",
        "household_goods_assembly_t2",
        "lab_equipment_2_assembly_t2",
        "lab_equipment_4_assembly_t2",
        "lab_equipment_assembly_t1_2",
        "lab_equipment_assembly_t2",
        "mech._parts_assembly_t3-1",
        "mech._parts_assembly_t3-2",
        "medical_equipment_assembly_t1",
        "medical_supplies_assembly_t1",
        "medical_supplies_assembly_t1_2",
        "medical_supplies_iii_assembly_t1",
        "pcb_assembly_t1",
        "server_assembly_t1",
        "solar_cell_assembly",
        "uranium_rods_t1",
        "vehicle_parts_2_assembly_t1",
        "vehicle_parts_3_assembly_t1",
        "vehicle_parts_assembly_t3",
      ],
      products: {
        input: [
          "anesthetics",
          "antibiotics",
          "bread",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "glass",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "microchips",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "silicon_poly",
          "snack",
          "steel",
          "uranium_pellets",
          "vehicle_parts",
          "vehicle_parts_ii",
          "wood",
        ],
        output: [
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "food_pack",
          "household_appliances",
          "household_goods",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "pcb",
          "server",
          "solar_cell",
          "uranium_rod",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
        ],
      },
    },
    assembly_manual: {
      id: "assembly_manual",
      icon: "AssemblyManual.png",
      name: "Assembly (Manual)",
      workers: 4,
      category: "general_machines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 25,
        },
      ],
      recipes: [
        "cp_assembly_t1",
        "cp2_assembly_t1",
        "electronics_assembly_t1",
        "mech._parts_assembly_t1",
        "vehicle_parts_assembly_t1",
      ],
      products: {
        input: [
          "concrete_slab",
          "construction_parts",
          "copper",
          "electronics",
          "iron",
          "mechanical_parts",
          "rubber",
          "wood",
        ],
        output: [
          "construction_parts",
          "construction_parts_ii",
          "electronics",
          "mechanical_parts",
          "vehicle_parts",
        ],
      },
    },
    assembly_robotic: {
      id: "assembly_robotic",
      icon: "AssemblyRoboticT1.png",
      name: "Assembly (Robotic)",
      workers: 3,
      category: "general_machines",
      maintenance: {
        type: "2",
        quantity: 5,
      },
      electricityProduction: -50,
      computingProduction: -4,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
        {
          product: "electronics_ii",
          quantity: 30,
        },
      ],
      recipes: [
        "cp_assembly_t3_2",
        "cp2_assembly_t3",
        "cp3_assembly_t3",
        "cp4_assembly_t1",
        "electronics_2_assembly_t2",
        "electronics_3_assembly_t2",
        "electronics_assembly_t4",
        "household_appliances_assembly_t2",
        "household_goods_assembly_t3",
        "lab_equipment_2_assembly_t3",
        "lab_equipment_4_assembly_t3",
        "lab_equipment_assembly_t2_2",
        "lab_equipment_assembly_t3",
        "mech._parts_assembly_t4",
        "medical_equipment_assembly_t2",
        "medical_supplies_assembly_t2",
        "medical_supplies_assembly_t2_2",
        "medical_supplies_iii_assembly_t2",
        "pcb_assembly_t2",
        "server_assembly_t2",
        "solar_cell_assembly_2",
        "vehicle_parts_2_assembly_t2",
        "vehicle_parts_3_assembly_t2",
        "vehicle_parts_assembly_t4",
      ],
      products: {
        input: [
          "anesthetics",
          "antibiotics",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "copper",
          "disinfectant",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "glass",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "liquid_nitrogen",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "microchips",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "silicon_poly",
          "steel",
          "vehicle_parts",
          "vehicle_parts_ii",
          "wood",
        ],
        output: [
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "household_appliances",
          "household_goods",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "pcb",
          "server",
          "solar_cell",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
        ],
      },
    },
    assembly_robotic_ii: {
      id: "assembly_robotic_ii",
      icon: "AssemblyRoboticT2.png",
      name: "Assembly (Robotic) II",
      workers: 3,
      category: "general_machines",
      maintenance: {
        type: "3",
        quantity: 5,
      },
      electricityProduction: -80,
      computingProduction: -6,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 60,
        },
      ],
      recipes: [
        "consumer_electronics_assembly_t1",
        "cp4_assembly_t2",
        "electronics_2_assembly_t3",
        "electronics_3_assembly_t3",
        "electronics_assembly_t5",
        "household_appliances_assembly_t3",
        "pcb_assembly_t3",
        "server_assembly_t3",
        "solar_cell_assembly_3",
        "solar_cell_assembly_4",
      ],
      products: {
        input: [
          "construction_parts_iii",
          "copper",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "glass",
          "microchips",
          "pcb",
          "plastic",
          "rubber",
          "silicon_poly",
          "silicon_wafer",
          "steel",
        ],
        output: [
          "construction_parts_iv",
          "consumer_electronics",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "household_appliances",
          "pcb",
          "server",
          "solar_cell",
          "solar_cell_mono",
        ],
      },
    },
    baking_unit: {
      id: "baking_unit",
      icon: "BakingUnit.png",
      name: "Baking Unit",
      workers: 8,
      category: "food_production",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -50,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: ["bread_making", "cake_production"],
      products: {
        input: ["cooking_oil", "eggs", "flour", "fruit", "sugar", "water"],
        output: ["bread", "cake"],
      },
    },
    basic_distiller: {
      id: "basic_distiller",
      icon: "BasicDieselDistiller.png",
      name: "Basic Distiller",
      workers: 6,
      category: "crude_oil_refining",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 40,
        },
      ],
      recipes: ["diesel_distillation_basic", "water_desalination_basic"],
      products: {
        input: ["coal", "crude_oil", "seawater"],
        output: ["brine", "diesel", "exhaust", "waste_water", "water"],
      },
    },
    basic_rack: {
      id: "basic_rack",
      icon: "BasicServerRack.png",
      name: "Basic Rack",
      workers: 0,
      category: "data_center",
      maintenance: {
        type: "3",
        quantity: 0.5800781,
      },
      electricityProduction: -5,
      computingProduction: 1,
      buildCosts: [
        {
          product: "server",
          quantity: 20,
        },
      ],
      recipes: ["create_computing_power"],
      products: {
        input: ["chilled_water"],
        output: ["water"],
      },
    },
    biomass_collection: {
      id: "biomass_collection",
      icon: "SettlementBiomassModule.png",
      name: "Biomass Collection",
      workers: 6,
      category: "housing_and_services",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    blast_furnace: {
      id: "blast_furnace",
      icon: "SmeltingFurnaceT1.png",
      name: "Blast Furnace",
      workers: 8,
      category: "metallurgy_and_smelting",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 60,
        },
      ],
      recipes: [
        "copper_scrap_smelting_2",
        "copper_smelting",
        "glass_broken_smelting_2",
        "glass_smelting_2",
        "iron_scrap_smelting_2",
        "iron_smelting",
      ],
      products: {
        input: [
          "broken_glass",
          "coal",
          "copper_ore",
          "copper_scrap",
          "glass_mix",
          "iron_ore",
          "iron_scrap",
        ],
        output: [
          "exhaust",
          "molten_copper",
          "molten_glass",
          "molten_iron",
          "slag",
        ],
      },
    },
    blast_furnace_ii: {
      id: "blast_furnace_ii",
      icon: "SmeltingFurnaceT2.png",
      name: "Blast Furnace II",
      workers: 18,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 5,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 180,
        },
      ],
      recipes: [
        "copper_scrap_smelting",
        "copper_smelting_sand",
        "glass_broken_smelting",
        "glass_smelting",
        "iron_scrap_smelting",
        "iron_smelting_lime",
      ],
      products: {
        input: [
          "broken_glass",
          "coal",
          "copper_ore_crushed",
          "copper_scrap",
          "glass_mix",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "sand",
        ],
        output: [
          "exhaust",
          "molten_copper",
          "molten_glass",
          "molten_iron",
          "slag",
        ],
      },
    },
    boiler_coal: {
      id: "boiler_coal",
      icon: "BoilerCoal.png",
      name: "Boiler (Coal)",
      workers: 4,
      category: "water_extraction_and_processing",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: ["steam_generation", "steam_generation_2", "steam_generation_3"],
      products: {
        input: ["animal_feed", "biomass", "coal", "water"],
        output: ["exhaust", "steam_hi"],
      },
    },
    boiler_electric: {
      id: "boiler_electric",
      icon: "BoilerElectric.png",
      name: "Boiler (Electric)",
      workers: 2,
      category: "water_extraction_and_processing",
      maintenance: {
        type: "2",
        quantity: 2,
      },
      electricityProduction: -1300,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
        {
          product: "electronics_ii",
          quantity: 40,
        },
      ],
      recipes: ["steam_generation_11"],
      products: {
        input: ["water"],
        output: ["steam_hi"],
      },
    },
    boiler_gas: {
      id: "boiler_gas",
      icon: "BoilerGas.png",
      name: "Boiler (Gas)",
      workers: 4,
      category: "water_extraction_and_processing",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 50,
        },
      ],
      recipes: [
        "steam_generation_10",
        "steam_generation_4",
        "steam_generation_5",
        "steam_generation_6",
        "steam_generation_7",
        "steam_generation_8",
        "steam_generation_9",
      ],
      products: {
        input: [
          "ethanol",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "light_oil",
          "medium_oil",
          "naphtha",
          "water",
        ],
        output: ["carbon_dioxide", "exhaust", "steam_depleted", "steam_hi"],
      },
    },
    burner_solid: {
      id: "burner_solid",
      icon: "Burner.png",
      name: "Burner (Solid)",
      workers: 1,
      category: "waste_management",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 15,
        },
      ],
      recipes: [
        "burning",
        "burning_2",
        "burning_3",
        "burning_4",
        "burning_5",
        "burning_6",
        "burning_7",
      ],
      products: {
        input: [
          "animal_feed",
          "biomass",
          "chicken_carcass",
          "meat_trimmings",
          "sludge",
          "sulfur",
          "waste",
        ],
        output: ["air_pollution"],
      },
    },
    cargo_depot_2: {
      id: "cargo_depot_2",
      icon: "CargoDepotT1.png",
      name: "Cargo Depot (2)",
      workers: 0,
      category: "cargo_docks",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
        {
          product: "concrete_slab",
          quantity: 100,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    cargo_depot_4: {
      id: "cargo_depot_4",
      icon: "CargoDepotT2.png",
      name: "Cargo Depot (4)",
      workers: 0,
      category: "cargo_docks",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 120,
        },
        {
          product: "concrete_slab",
          quantity: 240,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    cargo_depot_6: {
      id: "cargo_depot_6",
      icon: "CargoDepotT3.png",
      name: "Cargo Depot (6)",
      workers: 0,
      category: "cargo_docks",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 200,
        },
        {
          product: "concrete_slab",
          quantity: 400,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    cargo_depot_8: {
      id: "cargo_depot_8",
      icon: "CargoDepotT4.png",
      name: "Cargo Depot (8)",
      workers: 0,
      category: "cargo_docks",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 300,
        },
        {
          product: "concrete_slab",
          quantity: 600,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    chemical_plant: {
      id: "chemical_plant",
      icon: "ChemicalPlant.png",
      name: "Chemical Plant",
      workers: 8,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -60,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: [
        "ammonia_synthesis",
        "disinfectant_production",
        "fertilizer_synthesis",
        "fuel_transesterification",
        "liquid_nitrogen_production",
      ],
      products: {
        input: [
          "ammonia",
          "cooking_oil",
          "ethanol",
          "hydrogen",
          "nitrogen",
          "plastic",
          "steel",
          "water",
        ],
        output: [
          "ammonia",
          "diesel",
          "disinfectant",
          "fertilizer_i",
          "liquid_nitrogen",
        ],
      },
    },
    chemical_plant_ii: {
      id: "chemical_plant_ii",
      icon: "ChemicalPlant2.png",
      name: "Chemical Plant II",
      workers: 16,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 8,
      },
      electricityProduction: -100,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 120,
        },
      ],
      recipes: [
        "ammonia_synthesis_2",
        "anesthetics_production",
        "disinfectant_production_2",
        "fertilizer_synthesis_2",
        "fuel_transesterification_2",
        "fuelgas_synthesis",
        "graphite_production",
        "graphite_production_2",
        "liquid_nitrogen_production_2",
        "morphine_production",
      ],
      products: {
        input: [
          "acid",
          "ammonia",
          "carbon_dioxide",
          "chlorine",
          "coal",
          "cooking_oil",
          "ethanol",
          "glass",
          "hydrogen",
          "hydrogen_fluoride",
          "nitrogen",
          "plastic",
          "poppy",
          "steel",
          "water",
        ],
        output: [
          "ammonia",
          "anesthetics",
          "diesel",
          "disinfectant",
          "fertilizer_i",
          "fuel_gas",
          "graphite",
          "liquid_nitrogen",
          "morphine",
          "sour_water",
        ],
      },
    },
    chicken_farm: {
      id: "chicken_farm",
      icon: "ChickenFarm.png",
      name: "Chicken Farm",
      workers: 12,
      category: "food_production",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 50,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    coal_maker: {
      id: "coal_maker",
      icon: "CharcoalMaker.png",
      name: "Coal Maker",
      workers: 2,
      category: "metallurgy_and_smelting",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["charcoal_making"],
      products: {
        input: ["wood"],
        output: ["coal", "exhaust"],
      },
    },
    coal_mine: {
      id: "coal_mine",
      icon: "MineTower.png",
      name: "Coal Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["coal_mining"],
      products: {
        input: [],
        output: ["coal"],
      },
    },
    concrete_mixer: {
      id: "concrete_mixer",
      icon: "ConcreteMixer.png",
      name: "Concrete Mixer",
      workers: 4,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 40,
        },
        {
          product: "electronics",
          quantity: 10,
        },
      ],
      recipes: [
        "concrete_mixing",
        "concrete_mixing_2",
        "concrete_mixing_3",
        "concrete_mixing_4",
      ],
      products: {
        input: ["cement", "gravel", "sand", "slag_crushed", "water"],
        output: ["concrete_slab"],
      },
    },
    concrete_mixer_ii: {
      id: "concrete_mixer_ii",
      icon: "ConcreteMixerT2.png",
      name: "Concrete Mixer II",
      workers: 7,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -40,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: ["concrete_mixing_5", "concrete_mixing_6"],
      products: {
        input: ["cement", "gravel", "sand", "slag_crushed", "water"],
        output: ["concrete_slab"],
      },
    },
    concrete_mixer_iii: {
      id: "concrete_mixer_iii",
      icon: "ConcreteMixerT3.png",
      name: "Concrete Mixer III",
      workers: 10,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: -80,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 40,
        },
      ],
      recipes: ["concrete_mixing_7", "concrete_mixing_8"],
      products: {
        input: ["cement", "gravel", "sand", "slag_crushed", "water"],
        output: ["concrete_slab"],
      },
    },
    consumer_electronics_module: {
      id: "consumer_electronics_module",
      icon: "SettlementConsumerElectronicsModule.png",
      name: "Consumer Electronics Module",
      workers: 24,
      category: "housing_and_services",
      maintenance: {
        type: "3",
        quantity: 8,
      },
      electricityProduction: -80,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 100,
        },
        {
          product: "glass",
          quantity: 80,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    cooled_caster: {
      id: "cooled_caster",
      icon: "CasterCooled.png",
      name: "Cooled Caster",
      workers: 4,
      category: "metallurgy_and_smelting",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 30,
        },
      ],
      recipes: ["steel_casting_cooled"],
      products: {
        input: ["molten_steel", "water"],
        output: ["steel"],
      },
    },
    cooled_caster_ii: {
      id: "cooled_caster_ii",
      icon: "CasterCooledT2.png",
      name: "Cooled Caster II",
      workers: 6,
      category: "metallurgy_and_smelting",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: ["steel_casting_cooled_2"],
      products: {
        input: ["molten_steel", "water"],
        output: ["steel"],
      },
    },
    cooling_tower: {
      id: "cooling_tower",
      icon: "CoolingTowerT1.png",
      name: "Cooling Tower",
      workers: 2,
      category: "water_extraction_and_processing",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 30,
        },
        {
          product: "concrete_slab",
          quantity: 40,
        },
      ],
      recipes: [
        "depleted_steam_condensation",
        "hi-press_steam_condensation",
        "lo-press_steam_condensation",
      ],
      products: {
        input: ["steam_depleted", "steam_hi", "steam_lo"],
        output: ["water"],
      },
    },
    cooling_tower_large: {
      id: "cooling_tower_large",
      icon: "CoolingTowerT2.png",
      name: "Cooling Tower (Large)",
      workers: 4,
      category: "water_extraction_and_processing",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 80,
        },
        {
          product: "concrete_slab",
          quantity: 200,
        },
      ],
      recipes: [
        "depleted_steam_condensation_2",
        "hi-press_steam_condensation_2",
        "lo-press_steam_condensation_2",
      ],
      products: {
        input: ["steam_depleted", "steam_hi", "steam_lo"],
        output: ["water"],
      },
    },
    copper_electrolysis: {
      id: "copper_electrolysis",
      icon: "CopperElectrolysis.png",
      name: "Copper Electrolysis",
      workers: 5,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -80,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: ["copper_purification_acid", "copper_purification_water"],
      products: {
        input: ["acid", "impure_copper", "water"],
        output: ["copper"],
      },
    },
    copper_mine: {
      id: "copper_mine",
      icon: "MineTower.png",
      name: "Copper Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["copper_mining"],
      products: {
        input: [],
        output: ["copper_ore"],
      },
    },
    cracking_unit: {
      id: "cracking_unit",
      icon: "HydroCrackerT1.png",
      name: "Cracking Unit",
      workers: 12,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -40,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 100,
        },
      ],
      recipes: [
        "diesel_reforming",
        "fuelgas_reforming",
        "heavyoil_cracking",
        "heavyoil_cracking_2",
        "naphtha_reforming",
        "naphtha_reforming_2",
      ],
      products: {
        input: [
          "diesel",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "naphtha",
          "oxygen",
          "steam_hi",
        ],
        output: [
          "carbon_dioxide",
          "diesel",
          "fuel_gas",
          "naphtha",
          "sour_water",
        ],
      },
    },
    crusher: {
      id: "crusher",
      icon: "Crusher.png",
      name: "Crusher",
      workers: 2,
      category: "metallurgy_and_smelting",
      electricityProduction: -30,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: [
        "copper_ore_crushing",
        "gold_ore_crushing",
        "gold_ore_milling",
        "gravel_crushing",
        "iron_ore_crushing",
        "rock_crushing",
        "slag_crushing",
        "uranium_crushing",
      ],
      products: {
        input: [
          "copper_ore",
          "gold_ore",
          "gold_ore_crushed",
          "gravel",
          "iron_ore",
          "rock",
          "slag",
          "uranium_ore",
        ],
        output: [
          "copper_ore_crushed",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gravel",
          "iron_ore_crushed",
          "sand",
          "slag_crushed",
          "uranium_ore_crushed",
        ],
      },
    },
    data_center: {
      id: "data_center",
      icon: "DataCenter.png",
      name: "Data Center",
      workers: 6,
      category: "general_machines",
      maintenance: {
        type: "3",
        quantity: 4,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 100,
        },
        {
          product: "electronics_ii",
          quantity: 120,
        },
        {
          product: "electronics_iii",
          quantity: 20,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    diesel_generator: {
      id: "diesel_generator",
      icon: "DieselGenerator.png",
      name: "Diesel Generator",
      workers: 2,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: 180,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
        {
          product: "electronics",
          quantity: 20,
        },
      ],
      recipes: ["dieselgenerator"],
      products: {
        input: ["diesel"],
        output: ["air_pollution", "electricity"],
      },
    },
    dirt_mine: {
      id: "dirt_mine",
      icon: "MineTower.png",
      name: "Dirt Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["dirt_mining"],
      products: {
        input: [],
        output: ["dirt"],
      },
    },
    distillation_stage_i: {
      id: "distillation_stage_i",
      icon: "DistillationTowerT1.png",
      name: "Distillation (Stage I)",
      workers: 6,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 50,
        },
      ],
      recipes: ["crude_oil_refining"],
      products: {
        input: ["crude_oil", "steam_hi"],
        output: ["heavy_oil", "medium_oil", "sour_water"],
      },
    },
    distillation_stage_ii: {
      id: "distillation_stage_ii",
      icon: "DistillationTowerT2.png",
      name: "Distillation (Stage II)",
      workers: 8,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 70,
        },
      ],
      recipes: ["crude_oil_refining_2"],
      products: {
        input: ["medium_oil", "steam_hi"],
        output: ["diesel", "light_oil"],
      },
    },
    distillation_stage_iii: {
      id: "distillation_stage_iii",
      icon: "DistillationTowerT3.png",
      name: "Distillation (Stage III)",
      workers: 10,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 70,
        },
      ],
      recipes: ["heavy_distillate_refining"],
      products: {
        input: ["light_oil", "steam_hi"],
        output: ["fuel_gas", "naphtha"],
      },
    },
    electrolyzer: {
      id: "electrolyzer",
      icon: "Electrolyzer.png",
      name: "Electrolyzer",
      workers: 3,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -100,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: [
        "ammonia_electrolysis",
        "brine_electrolysis",
        "water_electrolysis",
      ],
      products: {
        input: ["ammonia", "brine", "water"],
        output: ["chlorine", "hydrogen", "nitrogen", "oxygen"],
      },
    },
    enrichment_plant: {
      id: "enrichment_plant",
      icon: "UraniumEnrichmentPlant.png",
      name: "Enrichment Plant",
      workers: 14,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 8,
      },
      electricityProduction: -200,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 150,
        },
        {
          product: "electronics_ii",
          quantity: 40,
        },
      ],
      recipes: ["uranium_enrichment"],
      products: {
        input: ["hydrogen_fluoride", "yellow_cake"],
        output: ["uranium_pellets"],
      },
    },
    evaporation_pond: {
      id: "evaporation_pond",
      icon: "EvaporationPond.png",
      name: "Evaporation Pond",
      workers: 4,
      category: "water_extraction_and_processing",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 30,
        },
      ],
      recipes: ["brine_making", "salt_making", "salt_making_2"],
      products: {
        input: ["brine", "seawater"],
        output: ["brine", "salt"],
      },
    },
    evaporation_pond_heated: {
      id: "evaporation_pond_heated",
      icon: "EvaporationPondHeated.png",
      name: "Evaporation Pond (Heated)",
      workers: 6,
      category: "water_extraction_and_processing",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: -60,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 50,
        },
      ],
      recipes: ["brine_making_2", "salt_making_3", "salt_making_4"],
      products: {
        input: ["brine", "seawater"],
        output: ["brine", "salt"],
      },
    },
    exhaust_scrubber: {
      id: "exhaust_scrubber",
      icon: "ExhaustScrubber.png",
      name: "Exhaust Scrubber",
      workers: 8,
      category: "waste_management",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -50,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 80,
        },
      ],
      recipes: ["exhaust_filtering"],
      products: {
        input: ["exhaust", "water"],
        output: ["air_pollution", "carbon_dioxide", "steam_lo", "sulfur"],
      },
    },
    farm: {
      id: "farm",
      icon: "FarmT1.png",
      name: "Farm",
      workers: 10,
      category: "food_production",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    fermentation_tank: {
      id: "fermentation_tank",
      icon: "FermentationTank.png",
      name: "Fermentation Tank",
      workers: 4,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -5,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: ["antibiotics", "ethanol_making_corn", "ethanol_making_sugar"],
      products: {
        input: ["ammonia", "corn_mash", "oxygen", "sugar"],
        output: ["antibiotics", "carbon_dioxide", "ethanol"],
      },
    },
    flare: {
      id: "flare",
      icon: "Flare.png",
      name: "Flare",
      workers: 1,
      category: "waste_management",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 10,
        },
      ],
      recipes: [
        "ammonia_disposal",
        "diesel_disposal",
        "ethanol_disposal",
        "fuel_gas_disposal",
        "heavy_oil_disposal",
        "hydrogen_disposal",
        "light_oil_disposal",
        "naphtha_disposal",
      ],
      products: {
        input: [
          "ammonia",
          "diesel",
          "ethanol",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "light_oil",
          "naphtha",
        ],
        output: ["air_pollution"],
      },
    },
    fluid_module_l: {
      id: "fluid_module_l",
      icon: "CargoDepotModuleFluidT3.png",
      name: "Fluid Module (L)",
      workers: 5,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 120,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    fluid_module_m: {
      id: "fluid_module_m",
      icon: "CargoDepotModuleFluidT2.png",
      name: "Fluid Module (M)",
      workers: 4,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    fluid_module_s: {
      id: "fluid_module_s",
      icon: "CargoDepotModuleFluidT1.png",
      name: "Fluid Module (S)",
      workers: 3,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    fluid_storage: {
      id: "fluid_storage",
      icon: "StorageFluid.png",
      name: "Fluid Storage",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: [
        "acid_storage_4",
        "ammonia_storage_4",
        "brine_storage_4",
        "carbon_dioxide_storage_4",
        "chilled_water_storage_4",
        "chlorine_storage_4",
        "cooking_oil_storage_4",
        "corn_mash_storage_4",
        "crude_oil_storage_4",
        "diesel_storage_4",
        "ethanol_storage_4",
        "exhaust_storage_4",
        "fertilizer_i_storage_4",
        "fertilizer_ii_storage_4",
        "fertilizer_organic_storage_4",
        "fuel_gas_storage_4",
        "heavy_oil_storage_4",
        "hydrogen_fluoride_storage_4",
        "hydrogen_storage_4",
        "light_oil_storage_4",
        "medium_oil_storage_4",
        "naphtha_storage_4",
        "nitrogen_storage_4",
        "oxygen_storage_4",
        "seawater_storage_4",
        "sour_water_storage_4",
        "steam_depleted_storage_4",
        "steam_hi_storage_4",
        "steam_lo_storage_4",
        "toxic_slurry_storage_4",
        "waste_water_storage_4",
        "water_storage_4",
      ],
      products: {
        input: [
          "acid",
          "ammonia",
          "brine",
          "carbon_dioxide",
          "chilled_water",
          "chlorine",
          "cooking_oil",
          "corn_mash",
          "crude_oil",
          "diesel",
          "ethanol",
          "exhaust",
          "fertilizer_i",
          "fertilizer_ii",
          "fertilizer_organic",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "hydrogen_fluoride",
          "light_oil",
          "medium_oil",
          "naphtha",
          "nitrogen",
          "oxygen",
          "seawater",
          "sour_water",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
        output: [
          "acid",
          "ammonia",
          "brine",
          "carbon_dioxide",
          "chilled_water",
          "chlorine",
          "cooking_oil",
          "corn_mash",
          "crude_oil",
          "diesel",
          "ethanol",
          "exhaust",
          "fertilizer_i",
          "fertilizer_ii",
          "fertilizer_organic",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "hydrogen_fluoride",
          "light_oil",
          "medium_oil",
          "naphtha",
          "nitrogen",
          "oxygen",
          "seawater",
          "sour_water",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
      },
    },
    fluid_storage_ii: {
      id: "fluid_storage_ii",
      icon: "StorageFluidT2.png",
      name: "Fluid Storage II",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 30,
        },
      ],
      recipes: [
        "acid_storage_3",
        "ammonia_storage_3",
        "brine_storage_3",
        "carbon_dioxide_storage_3",
        "chilled_water_storage_3",
        "chlorine_storage_3",
        "cooking_oil_storage_3",
        "corn_mash_storage_3",
        "crude_oil_storage_3",
        "diesel_storage_3",
        "ethanol_storage_3",
        "exhaust_storage_3",
        "fertilizer_i_storage_3",
        "fertilizer_ii_storage_3",
        "fertilizer_organic_storage_3",
        "fuel_gas_storage_3",
        "heavy_oil_storage_3",
        "hydrogen_fluoride_storage_3",
        "hydrogen_storage_3",
        "light_oil_storage_3",
        "medium_oil_storage_3",
        "naphtha_storage_3",
        "nitrogen_storage_3",
        "oxygen_storage_3",
        "seawater_storage_3",
        "sour_water_storage_3",
        "steam_depleted_storage_3",
        "steam_hi_storage_3",
        "steam_lo_storage_3",
        "toxic_slurry_storage_3",
        "waste_water_storage_3",
        "water_storage_3",
      ],
      products: {
        input: [
          "acid",
          "ammonia",
          "brine",
          "carbon_dioxide",
          "chilled_water",
          "chlorine",
          "cooking_oil",
          "corn_mash",
          "crude_oil",
          "diesel",
          "ethanol",
          "exhaust",
          "fertilizer_i",
          "fertilizer_ii",
          "fertilizer_organic",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "hydrogen_fluoride",
          "light_oil",
          "medium_oil",
          "naphtha",
          "nitrogen",
          "oxygen",
          "seawater",
          "sour_water",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
        output: [
          "acid",
          "ammonia",
          "brine",
          "carbon_dioxide",
          "chilled_water",
          "chlorine",
          "cooking_oil",
          "corn_mash",
          "crude_oil",
          "diesel",
          "ethanol",
          "exhaust",
          "fertilizer_i",
          "fertilizer_ii",
          "fertilizer_organic",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "hydrogen_fluoride",
          "light_oil",
          "medium_oil",
          "naphtha",
          "nitrogen",
          "oxygen",
          "seawater",
          "sour_water",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
      },
    },
    fluid_storage_iii: {
      id: "fluid_storage_iii",
      icon: "StorageFluidT3.png",
      name: "Fluid Storage III",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 90,
        },
      ],
      recipes: [
        "acid_storage_2",
        "ammonia_storage_2",
        "brine_storage_2",
        "carbon_dioxide_storage_2",
        "chilled_water_storage_2",
        "chlorine_storage_2",
        "cooking_oil_storage_2",
        "corn_mash_storage_2",
        "crude_oil_storage_2",
        "diesel_storage_2",
        "ethanol_storage_2",
        "exhaust_storage_2",
        "fertilizer_i_storage_2",
        "fertilizer_ii_storage_2",
        "fertilizer_organic_storage_2",
        "fuel_gas_storage_2",
        "heavy_oil_storage_2",
        "hydrogen_fluoride_storage_2",
        "hydrogen_storage_2",
        "light_oil_storage_2",
        "medium_oil_storage_2",
        "naphtha_storage_2",
        "nitrogen_storage_2",
        "oxygen_storage_2",
        "seawater_storage_2",
        "sour_water_storage_2",
        "steam_depleted_storage_2",
        "steam_hi_storage_2",
        "steam_lo_storage_2",
        "toxic_slurry_storage_2",
        "waste_water_storage_2",
        "water_storage_2",
      ],
      products: {
        input: [
          "acid",
          "ammonia",
          "brine",
          "carbon_dioxide",
          "chilled_water",
          "chlorine",
          "cooking_oil",
          "corn_mash",
          "crude_oil",
          "diesel",
          "ethanol",
          "exhaust",
          "fertilizer_i",
          "fertilizer_ii",
          "fertilizer_organic",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "hydrogen_fluoride",
          "light_oil",
          "medium_oil",
          "naphtha",
          "nitrogen",
          "oxygen",
          "seawater",
          "sour_water",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
        output: [
          "acid",
          "ammonia",
          "brine",
          "carbon_dioxide",
          "chilled_water",
          "chlorine",
          "cooking_oil",
          "corn_mash",
          "crude_oil",
          "diesel",
          "ethanol",
          "exhaust",
          "fertilizer_i",
          "fertilizer_ii",
          "fertilizer_organic",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "hydrogen_fluoride",
          "light_oil",
          "medium_oil",
          "naphtha",
          "nitrogen",
          "oxygen",
          "seawater",
          "sour_water",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
      },
    },
    fluid_storage_iv: {
      id: "fluid_storage_iv",
      icon: "StorageFluidT4.png",
      name: "Fluid Storage IV",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 180,
        },
      ],
      recipes: [
        "acid_storage",
        "ammonia_storage",
        "brine_storage",
        "carbon_dioxide_storage",
        "chilled_water_storage",
        "chlorine_storage",
        "cooking_oil_storage",
        "corn_mash_storage",
        "crude_oil_storage",
        "diesel_storage",
        "ethanol_storage",
        "exhaust_storage",
        "fertilizer_i_storage",
        "fertilizer_ii_storage",
        "fertilizer_organic_storage",
        "fuel_gas_storage",
        "heavy_oil_storage",
        "hydrogen_fluoride_storage",
        "hydrogen_storage",
        "light_oil_storage",
        "medium_oil_storage",
        "naphtha_storage",
        "nitrogen_storage",
        "oxygen_storage",
        "seawater_storage",
        "sour_water_storage",
        "steam_depleted_storage",
        "steam_hi_storage",
        "steam_lo_storage",
        "toxic_slurry_storage",
        "waste_water_storage",
        "water_storage",
      ],
      products: {
        input: [
          "acid",
          "ammonia",
          "brine",
          "carbon_dioxide",
          "chilled_water",
          "chlorine",
          "cooking_oil",
          "corn_mash",
          "crude_oil",
          "diesel",
          "ethanol",
          "exhaust",
          "fertilizer_i",
          "fertilizer_ii",
          "fertilizer_organic",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "hydrogen_fluoride",
          "light_oil",
          "medium_oil",
          "naphtha",
          "nitrogen",
          "oxygen",
          "seawater",
          "sour_water",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
        output: [
          "acid",
          "ammonia",
          "brine",
          "carbon_dioxide",
          "chilled_water",
          "chlorine",
          "cooking_oil",
          "corn_mash",
          "crude_oil",
          "diesel",
          "ethanol",
          "exhaust",
          "fertilizer_i",
          "fertilizer_ii",
          "fertilizer_organic",
          "fuel_gas",
          "heavy_oil",
          "hydrogen",
          "hydrogen_fluoride",
          "light_oil",
          "medium_oil",
          "naphtha",
          "nitrogen",
          "oxygen",
          "seawater",
          "sour_water",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
      },
    },
    food_market: {
      id: "food_market",
      icon: "SettlementFoodModule.png",
      name: "Food Market",
      workers: 3,
      category: "housing_and_services",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 25,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    food_market_ii: {
      id: "food_market_ii",
      icon: "SettlementFoodModuleT2.png",
      name: "Food Market II",
      workers: 6,
      category: "housing_and_services",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    food_processor: {
      id: "food_processor",
      icon: "FoodProcessor.png",
      name: "Food Processor",
      workers: 8,
      category: "food_production",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -25,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 30,
        },
      ],
      recipes: [
        "meat_processing",
        "sausage_processing",
        "snack_production",
        "snack_production_2",
        "sugar_refining_cane",
        "tofu_making",
      ],
      products: {
        input: [
          "chicken_carcass",
          "cooking_oil",
          "corn",
          "flour",
          "limestone",
          "meat_trimmings",
          "plastic",
          "potato",
          "salt",
          "soybean",
          "sugar_cane",
          "sulfur",
          "water",
        ],
        output: [
          "animal_feed",
          "biomass",
          "meat",
          "meat_trimmings",
          "sausage",
          "snack",
          "sugar",
          "tofu",
        ],
      },
    },
    fuel_station: {
      id: "fuel_station",
      icon: "FuelStationT1.png",
      name: "Fuel Station",
      workers: 0,
      category: "buildings_for_vehicles",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 20,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    fuel_station_ii: {
      id: "fuel_station_ii",
      icon: "FuelStationT2.png",
      name: "Fuel Station II",
      workers: 0,
      category: "buildings_for_vehicles",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    fuel_station_iii: {
      id: "fuel_station_iii",
      icon: "FuelStationT3.png",
      name: "Fuel Station III",
      workers: 0,
      category: "buildings_for_vehicles",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 70,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    gas_injection_pump: {
      id: "gas_injection_pump",
      icon: "GasInjectionPump.png",
      name: "Gas Injection Pump",
      workers: 4,
      category: "waste_management",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -100,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 50,
        },
      ],
      recipes: ["co2_injection"],
      products: {
        input: ["carbon_dioxide", "seawater"],
        output: [],
      },
    },
    glass_maker: {
      id: "glass_maker",
      icon: "GlassMakerT1.png",
      name: "Glass Maker",
      workers: 6,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -80,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 50,
        },
      ],
      recipes: ["glass_casting"],
      products: {
        input: ["molten_glass"],
        output: ["glass", "slag"],
      },
    },
    glass_maker_ii: {
      id: "glass_maker_ii",
      icon: "GlassMakerT2.png",
      name: "Glass Maker II",
      workers: 14,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 8,
      },
      electricityProduction: -200,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 120,
        },
      ],
      recipes: ["glass_casting_2"],
      products: {
        input: ["molten_glass"],
        output: ["glass"],
      },
    },
    gold_furnace: {
      id: "gold_furnace",
      icon: "GoldFurnace.png",
      name: "Gold Furnace",
      workers: 6,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -120,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 70,
        },
      ],
      recipes: ["gold_smelting", "gold_smelting_2"],
      products: {
        input: ["gold_ore_concentrate", "gold_scrap", "sand"],
        output: ["exhaust", "gold"],
      },
    },
    gold_mine: {
      id: "gold_mine",
      icon: "MineTower.png",
      name: "Gold Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["gold_mining"],
      products: {
        input: [],
        output: ["gold_ore"],
      },
    },
    gravel_mine: {
      id: "gravel_mine",
      icon: "MineTower.png",
      name: "Gravel Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["gravel_mining"],
      products: {
        input: [],
        output: ["gravel"],
      },
    },
    greenhouse: {
      id: "greenhouse",
      icon: "FarmT3.png",
      name: "Greenhouse",
      workers: 22,
      category: "food_production",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 100,
        },
        {
          product: "glass",
          quantity: 320,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    greenhouse_ii: {
      id: "greenhouse_ii",
      icon: "FarmT4.png",
      name: "Greenhouse II",
      workers: 32,
      category: "food_production",
      maintenance: {
        type: "1",
        quantity: 8,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 200,
        },
        {
          product: "glass",
          quantity: 640,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    groundwater_pump: {
      id: "groundwater_pump",
      icon: "LandWaterPump.png",
      name: "Groundwater Pump",
      workers: 2,
      category: "water_extraction_and_processing",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -30,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: ["water_pumping"],
      products: {
        input: [],
        output: ["water"],
      },
    },
    "high-pressure_turbine": {
      id: "high-pressure_turbine",
      icon: "TurbineHighPress.png",
      name: "High-pressure Turbine",
      workers: 2,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 50,
        },
      ],
      recipes: ["turbinehighpress"],
      products: {
        input: ["steam_hi"],
        output: ["mechanical_power", "steam_lo"],
      },
    },
    "high-pressure_turbine_ii": {
      id: "high-pressure_turbine_ii",
      icon: "TurbineHighPressT2.png",
      name: "High-pressure Turbine II",
      workers: 4,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 80,
        },
      ],
      recipes: ["turbinehighpresst2"],
      products: {
        input: ["steam_hi"],
        output: ["mechanical_power", "steam_lo"],
      },
    },
    household_appliances_module: {
      id: "household_appliances_module",
      icon: "SettlementHouseholdAppliancesModule.png",
      name: "Household Appliances Module",
      workers: 20,
      category: "housing_and_services",
      maintenance: {
        type: "2",
        quantity: 8,
      },
      electricityProduction: -40,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 80,
        },
        {
          product: "glass",
          quantity: 80,
        },
        {
          product: "electronics_ii",
          quantity: 20,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    household_goods_module: {
      id: "household_goods_module",
      icon: "SettlementHouseholdGoodsModule.png",
      name: "Household Goods Module",
      workers: 16,
      category: "housing_and_services",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: -30,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
        {
          product: "glass",
          quantity: 40,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    housing: {
      id: "housing",
      icon: "Housing.png",
      name: "Housing",
      workers: 0,
      category: "housing_and_services",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 80,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    housing_ii: {
      id: "housing_ii",
      icon: "HousingT2.png",
      name: "Housing II",
      workers: 0,
      category: "housing_and_services",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 140,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    housing_iii: {
      id: "housing_iii",
      icon: "HousingT3.png",
      name: "Housing III",
      workers: 0,
      category: "housing_and_services",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 200,
        },
        {
          product: "glass",
          quantity: 240,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    hydrogen_reformer: {
      id: "hydrogen_reformer",
      icon: "HydrogenReformer.png",
      name: "Hydrogen Reformer",
      workers: 18,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: -40,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 80,
        },
      ],
      recipes: ["hydrogen_reforming"],
      products: {
        input: ["fuel_gas", "steam_hi"],
        output: ["carbon_dioxide", "hydrogen"],
      },
    },
    iron_mine: {
      id: "iron_mine",
      icon: "MineTower.png",
      name: "Iron Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["iron_mining"],
      products: {
        input: [],
        output: ["iron_ore"],
      },
    },
    irrigated_farm: {
      id: "irrigated_farm",
      icon: "FarmT2.png",
      name: "Irrigated Farm",
      workers: 14,
      category: "food_production",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 60,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    limestone_mine: {
      id: "limestone_mine",
      icon: "MineTower.png",
      name: "Limestone Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["limestone_mining"],
      products: {
        input: [],
        output: ["limestone"],
      },
    },
    liquid_dump: {
      id: "liquid_dump",
      icon: "WasteDump.png",
      name: "Liquid Dump",
      workers: 1,
      category: "waste_management",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: [
        "acid_dumping",
        "brine_dumping",
        "seawater_dumping",
        "sour_water_dumping",
        "toxic_slurry_dumping",
        "waste_water_dumping",
        "water_dumping",
      ],
      products: {
        input: [
          "acid",
          "brine",
          "seawater",
          "sour_water",
          "toxic_slurry",
          "waste_water",
          "water",
        ],
        output: ["water_pollution"],
      },
    },
    loose_module_l: {
      id: "loose_module_l",
      icon: "CargoDepotModuleLooseT3.png",
      name: "Loose Module (L)",
      workers: 5,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 120,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    loose_module_m: {
      id: "loose_module_m",
      icon: "CargoDepotModuleLooseT2.png",
      name: "Loose Module (M)",
      workers: 5,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    loose_module_s: {
      id: "loose_module_s",
      icon: "CargoDepotModuleLooseT1.png",
      name: "Loose Module (S)",
      workers: 3,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    loose_storage: {
      id: "loose_storage",
      icon: "StorageLoose.png",
      name: "Loose Storage",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: [
        "animal_feed_storage_4",
        "biomass_storage_4",
        "broken_glass_storage_4",
        "canola_storage_4",
        "coal_storage_4",
        "compost_storage_4",
        "copper_ore_crushed_storage_4",
        "copper_ore_storage_4",
        "copper_scrap_storage_4",
        "corn_storage_4",
        "dirt_storage_4",
        "filter_media_storage_4",
        "glass_mix_storage_4",
        "gold_ore_concentrate_storage_4",
        "gold_ore_crushed_storage_4",
        "gold_ore_powder_storage_4",
        "gold_ore_storage_4",
        "gold_scrap_storage_4",
        "gravel_storage_4",
        "iron_ore_crushed_storage_4",
        "iron_ore_storage_4",
        "iron_scrap_storage_4",
        "limestone_storage_4",
        "meat_trimmings_storage_4",
        "poppy_storage_4",
        "potato_storage_4",
        "quartz_storage_4",
        "recyclables_storage_4",
        "rock_storage_4",
        "salt_storage_4",
        "sand_storage_4",
        "slag_crushed_storage_4",
        "slag_storage_4",
        "sludge_storage_4",
        "soybean_storage_4",
        "sugar_cane_storage_4",
        "sugar_storage_4",
        "sulfur_storage_4",
        "uranium_ore_crushed_storage_4",
        "uranium_ore_storage_4",
        "waste_storage_4",
        "wheat_storage_4",
        "yellow_cake_storage_4",
      ],
      products: {
        input: [
          "animal_feed",
          "biomass",
          "broken_glass",
          "canola",
          "coal",
          "compost",
          "copper_ore",
          "copper_ore_crushed",
          "copper_scrap",
          "corn",
          "dirt",
          "filter_media",
          "glass_mix",
          "gold_ore",
          "gold_ore_concentrate",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gold_scrap",
          "gravel",
          "iron_ore",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "meat_trimmings",
          "poppy",
          "potato",
          "quartz",
          "recyclables",
          "rock",
          "salt",
          "sand",
          "slag",
          "slag_crushed",
          "sludge",
          "soybean",
          "sugar",
          "sugar_cane",
          "sulfur",
          "uranium_ore",
          "uranium_ore_crushed",
          "waste",
          "wheat",
          "yellow_cake",
        ],
        output: [
          "animal_feed",
          "biomass",
          "broken_glass",
          "canola",
          "coal",
          "compost",
          "copper_ore",
          "copper_ore_crushed",
          "copper_scrap",
          "corn",
          "dirt",
          "filter_media",
          "glass_mix",
          "gold_ore",
          "gold_ore_concentrate",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gold_scrap",
          "gravel",
          "iron_ore",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "meat_trimmings",
          "poppy",
          "potato",
          "quartz",
          "recyclables",
          "rock",
          "salt",
          "sand",
          "slag",
          "slag_crushed",
          "sludge",
          "soybean",
          "sugar",
          "sugar_cane",
          "sulfur",
          "uranium_ore",
          "uranium_ore_crushed",
          "waste",
          "wheat",
          "yellow_cake",
        ],
      },
    },
    loose_storage_ii: {
      id: "loose_storage_ii",
      icon: "StorageLooseT2.png",
      name: "Loose Storage II",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 30,
        },
      ],
      recipes: [
        "animal_feed_storage_3",
        "biomass_storage_3",
        "broken_glass_storage_3",
        "canola_storage_3",
        "coal_storage_3",
        "compost_storage_3",
        "copper_ore_crushed_storage_3",
        "copper_ore_storage_3",
        "copper_scrap_storage_3",
        "corn_storage_3",
        "dirt_storage_3",
        "filter_media_storage_3",
        "glass_mix_storage_3",
        "gold_ore_concentrate_storage_3",
        "gold_ore_crushed_storage_3",
        "gold_ore_powder_storage_3",
        "gold_ore_storage_3",
        "gold_scrap_storage_3",
        "gravel_storage_3",
        "iron_ore_crushed_storage_3",
        "iron_ore_storage_3",
        "iron_scrap_storage_3",
        "limestone_storage_3",
        "meat_trimmings_storage_3",
        "poppy_storage_3",
        "potato_storage_3",
        "quartz_storage_3",
        "recyclables_storage_3",
        "rock_storage_3",
        "salt_storage_3",
        "sand_storage_3",
        "slag_crushed_storage_3",
        "slag_storage_3",
        "sludge_storage_3",
        "soybean_storage_3",
        "sugar_cane_storage_3",
        "sugar_storage_3",
        "sulfur_storage_3",
        "uranium_ore_crushed_storage_3",
        "uranium_ore_storage_3",
        "waste_storage_3",
        "wheat_storage_3",
        "yellow_cake_storage_3",
      ],
      products: {
        input: [
          "animal_feed",
          "biomass",
          "broken_glass",
          "canola",
          "coal",
          "compost",
          "copper_ore",
          "copper_ore_crushed",
          "copper_scrap",
          "corn",
          "dirt",
          "filter_media",
          "glass_mix",
          "gold_ore",
          "gold_ore_concentrate",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gold_scrap",
          "gravel",
          "iron_ore",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "meat_trimmings",
          "poppy",
          "potato",
          "quartz",
          "recyclables",
          "rock",
          "salt",
          "sand",
          "slag",
          "slag_crushed",
          "sludge",
          "soybean",
          "sugar",
          "sugar_cane",
          "sulfur",
          "uranium_ore",
          "uranium_ore_crushed",
          "waste",
          "wheat",
          "yellow_cake",
        ],
        output: [
          "animal_feed",
          "biomass",
          "broken_glass",
          "canola",
          "coal",
          "compost",
          "copper_ore",
          "copper_ore_crushed",
          "copper_scrap",
          "corn",
          "dirt",
          "filter_media",
          "glass_mix",
          "gold_ore",
          "gold_ore_concentrate",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gold_scrap",
          "gravel",
          "iron_ore",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "meat_trimmings",
          "poppy",
          "potato",
          "quartz",
          "recyclables",
          "rock",
          "salt",
          "sand",
          "slag",
          "slag_crushed",
          "sludge",
          "soybean",
          "sugar",
          "sugar_cane",
          "sulfur",
          "uranium_ore",
          "uranium_ore_crushed",
          "waste",
          "wheat",
          "yellow_cake",
        ],
      },
    },
    loose_storage_iii: {
      id: "loose_storage_iii",
      icon: "StorageLooseT3.png",
      name: "Loose Storage III",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 90,
        },
      ],
      recipes: [
        "animal_feed_storage_2",
        "biomass_storage_2",
        "broken_glass_storage_2",
        "canola_storage_2",
        "coal_storage_2",
        "compost_storage_2",
        "copper_ore_crushed_storage_2",
        "copper_ore_storage_2",
        "copper_scrap_storage_2",
        "corn_storage_2",
        "dirt_storage_2",
        "filter_media_storage_2",
        "glass_mix_storage_2",
        "gold_ore_concentrate_storage_2",
        "gold_ore_crushed_storage_2",
        "gold_ore_powder_storage_2",
        "gold_ore_storage_2",
        "gold_scrap_storage_2",
        "gravel_storage_2",
        "iron_ore_crushed_storage_2",
        "iron_ore_storage_2",
        "iron_scrap_storage_2",
        "limestone_storage_2",
        "meat_trimmings_storage_2",
        "poppy_storage_2",
        "potato_storage_2",
        "quartz_storage_2",
        "recyclables_storage_2",
        "rock_storage_2",
        "salt_storage_2",
        "sand_storage_2",
        "slag_crushed_storage_2",
        "slag_storage_2",
        "sludge_storage_2",
        "soybean_storage_2",
        "sugar_cane_storage_2",
        "sugar_storage_2",
        "sulfur_storage_2",
        "uranium_ore_crushed_storage_2",
        "uranium_ore_storage_2",
        "waste_storage_2",
        "wheat_storage_2",
        "yellow_cake_storage_2",
      ],
      products: {
        input: [
          "animal_feed",
          "biomass",
          "broken_glass",
          "canola",
          "coal",
          "compost",
          "copper_ore",
          "copper_ore_crushed",
          "copper_scrap",
          "corn",
          "dirt",
          "filter_media",
          "glass_mix",
          "gold_ore",
          "gold_ore_concentrate",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gold_scrap",
          "gravel",
          "iron_ore",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "meat_trimmings",
          "poppy",
          "potato",
          "quartz",
          "recyclables",
          "rock",
          "salt",
          "sand",
          "slag",
          "slag_crushed",
          "sludge",
          "soybean",
          "sugar",
          "sugar_cane",
          "sulfur",
          "uranium_ore",
          "uranium_ore_crushed",
          "waste",
          "wheat",
          "yellow_cake",
        ],
        output: [
          "animal_feed",
          "biomass",
          "broken_glass",
          "canola",
          "coal",
          "compost",
          "copper_ore",
          "copper_ore_crushed",
          "copper_scrap",
          "corn",
          "dirt",
          "filter_media",
          "glass_mix",
          "gold_ore",
          "gold_ore_concentrate",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gold_scrap",
          "gravel",
          "iron_ore",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "meat_trimmings",
          "poppy",
          "potato",
          "quartz",
          "recyclables",
          "rock",
          "salt",
          "sand",
          "slag",
          "slag_crushed",
          "sludge",
          "soybean",
          "sugar",
          "sugar_cane",
          "sulfur",
          "uranium_ore",
          "uranium_ore_crushed",
          "waste",
          "wheat",
          "yellow_cake",
        ],
      },
    },
    loose_storage_iv: {
      id: "loose_storage_iv",
      icon: "StorageLooseT4.png",
      name: "Loose Storage IV",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 180,
        },
      ],
      recipes: [
        "animal_feed_storage",
        "biomass_storage",
        "broken_glass_storage",
        "canola_storage",
        "coal_storage",
        "compost_storage",
        "copper_ore_crushed_storage",
        "copper_ore_storage",
        "copper_scrap_storage",
        "corn_storage",
        "dirt_storage",
        "filter_media_storage",
        "glass_mix_storage",
        "gold_ore_concentrate_storage",
        "gold_ore_crushed_storage",
        "gold_ore_powder_storage",
        "gold_ore_storage",
        "gold_scrap_storage",
        "gravel_storage",
        "iron_ore_crushed_storage",
        "iron_ore_storage",
        "iron_scrap_storage",
        "limestone_storage",
        "meat_trimmings_storage",
        "poppy_storage",
        "potato_storage",
        "quartz_storage",
        "recyclables_storage",
        "rock_storage",
        "salt_storage",
        "sand_storage",
        "slag_crushed_storage",
        "slag_storage",
        "sludge_storage",
        "soybean_storage",
        "sugar_cane_storage",
        "sugar_storage",
        "sulfur_storage",
        "uranium_ore_crushed_storage",
        "uranium_ore_storage",
        "waste_storage",
        "wheat_storage",
        "yellow_cake_storage",
      ],
      products: {
        input: [
          "animal_feed",
          "biomass",
          "broken_glass",
          "canola",
          "coal",
          "compost",
          "copper_ore",
          "copper_ore_crushed",
          "copper_scrap",
          "corn",
          "dirt",
          "filter_media",
          "glass_mix",
          "gold_ore",
          "gold_ore_concentrate",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gold_scrap",
          "gravel",
          "iron_ore",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "meat_trimmings",
          "poppy",
          "potato",
          "quartz",
          "recyclables",
          "rock",
          "salt",
          "sand",
          "slag",
          "slag_crushed",
          "sludge",
          "soybean",
          "sugar",
          "sugar_cane",
          "sulfur",
          "uranium_ore",
          "uranium_ore_crushed",
          "waste",
          "wheat",
          "yellow_cake",
        ],
        output: [
          "animal_feed",
          "biomass",
          "broken_glass",
          "canola",
          "coal",
          "compost",
          "copper_ore",
          "copper_ore_crushed",
          "copper_scrap",
          "corn",
          "dirt",
          "filter_media",
          "glass_mix",
          "gold_ore",
          "gold_ore_concentrate",
          "gold_ore_crushed",
          "gold_ore_powder",
          "gold_scrap",
          "gravel",
          "iron_ore",
          "iron_ore_crushed",
          "iron_scrap",
          "limestone",
          "meat_trimmings",
          "poppy",
          "potato",
          "quartz",
          "recyclables",
          "rock",
          "salt",
          "sand",
          "slag",
          "slag_crushed",
          "sludge",
          "soybean",
          "sugar",
          "sugar_cane",
          "sulfur",
          "uranium_ore",
          "uranium_ore_crushed",
          "waste",
          "wheat",
          "yellow_cake",
        ],
      },
    },
    "low-pressure_turbine": {
      id: "low-pressure_turbine",
      icon: "TurbineLowPress.png",
      name: "Low-pressure Turbine",
      workers: 3,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
      ],
      recipes: ["turbinelowpress"],
      products: {
        input: ["steam_lo"],
        output: ["mechanical_power", "steam_depleted"],
      },
    },
    "low-pressure_turbine_ii": {
      id: "low-pressure_turbine_ii",
      icon: "TurbineLowPressT2.png",
      name: "Low-pressure Turbine II",
      workers: 6,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 140,
        },
      ],
      recipes: ["turbinelowpresst2"],
      products: {
        input: ["steam_lo"],
        output: ["mechanical_power", "steam_depleted"],
      },
    },
    maintenance_depot: {
      id: "maintenance_depot",
      icon: "MaintenanceDepotT1.png",
      name: "Maintenance Depot",
      workers: 20,
      category: "buildings",
      electricityProduction: -60,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 50,
        },
      ],
      recipes: ["maintenance_i_4", "maintenance_i_5"],
      products: {
        input: ["electronics", "mechanical_parts"],
        output: ["maintenance_i", "recyclables"],
      },
    },
    maintenance_depot_basic: {
      id: "maintenance_depot_basic",
      icon: "MaintenanceDepotT0.png",
      name: "Maintenance Depot (Basic)",
      workers: 6,
      category: "buildings",
      electricityProduction: -25,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 40,
        },
      ],
      recipes: ["maintenance_i_6"],
      products: {
        input: ["electronics", "mechanical_parts"],
        output: ["maintenance_i"],
      },
    },
    maintenance_ii_depot: {
      id: "maintenance_ii_depot",
      icon: "MaintenanceDepotT2.png",
      name: "Maintenance II Depot",
      workers: 28,
      category: "buildings",
      electricityProduction: -100,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 50,
        },
        {
          product: "electronics_ii",
          quantity: 20,
        },
      ],
      recipes: ["maintenance_ii_3", "maintenance_ii_4"],
      products: {
        input: ["electronics_ii", "mechanical_parts"],
        output: ["maintenance_ii", "recyclables"],
      },
    },
    maintenance_iii_depot: {
      id: "maintenance_iii_depot",
      icon: "MaintenanceDepotT3.png",
      name: "Maintenance III Depot",
      workers: 32,
      category: "buildings",
      electricityProduction: -140,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 50,
        },
        {
          product: "electronics_iii",
          quantity: 20,
        },
      ],
      recipes: ["maintenance_iii_3", "maintenance_iii_4"],
      products: {
        input: ["electronics_iii", "mechanical_parts"],
        output: ["maintenance_iii", "recyclables"],
      },
    },
    metal_caster: {
      id: "metal_caster",
      icon: "Caster.png",
      name: "Metal Caster",
      workers: 2,
      category: "metallurgy_and_smelting",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: ["copper_casting", "iron_casting"],
      products: {
        input: ["molten_copper", "molten_iron"],
        output: ["impure_copper", "iron"],
      },
    },
    metal_caster_ii: {
      id: "metal_caster_ii",
      icon: "CasterT2.png",
      name: "Metal Caster II",
      workers: 3,
      category: "metallurgy_and_smelting",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
        {
          product: "steel",
          quantity: 20,
        },
      ],
      recipes: ["copper_casting_2", "iron_casting_2"],
      products: {
        input: ["molten_copper", "molten_iron"],
        output: ["impure_copper", "iron"],
      },
    },
    microchip_machine: {
      id: "microchip_machine",
      icon: "MicrochipMachine.png",
      name: "Microchip Machine",
      workers: 6,
      category: "general_machines",
      maintenance: {
        type: "2",
        quantity: 6,
      },
      electricityProduction: -30,
      computingProduction: -4,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 80,
        },
      ],
      recipes: [
        "microchip_manufacturing_final_stage",
        "microchip_manufacturing_stage_1a",
        "microchip_manufacturing_stage_1b",
        "microchip_manufacturing_stage_1c",
        "microchip_manufacturing_stage_1d",
        "microchip_manufacturing_stage_2a",
        "microchip_manufacturing_stage_2b",
        "microchip_manufacturing_stage_2c",
        "microchip_manufacturing_stage_2d",
        "microchip_manufacturing_stage_3a",
        "microchip_manufacturing_stage_3b",
        "microchip_manufacturing_stage_3c",
      ],
      products: {
        input: [
          "acid",
          "copper",
          "gold",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "plastic",
          "silicon_wafer",
          "water",
        ],
        output: [
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
        ],
      },
    },
    microchip_machine_ii: {
      id: "microchip_machine_ii",
      icon: "MicrochipMachineT2.png",
      name: "Microchip Machine II",
      workers: 8,
      category: "general_machines",
      maintenance: {
        type: "2",
        quantity: 10,
      },
      electricityProduction: -60,
      computingProduction: -8,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 160,
        },
      ],
      recipes: [
        "microchip_manufacturing_final_stage_2",
        "microchip_manufacturing_stage_1a_2",
        "microchip_manufacturing_stage_1b_2",
        "microchip_manufacturing_stage_1c_2",
        "microchip_manufacturing_stage_1d_2",
        "microchip_manufacturing_stage_2a_2",
        "microchip_manufacturing_stage_2b_2",
        "microchip_manufacturing_stage_2c_2",
        "microchip_manufacturing_stage_2d_2",
        "microchip_manufacturing_stage_3a_2",
        "microchip_manufacturing_stage_3b_2",
        "microchip_manufacturing_stage_3c_2",
      ],
      products: {
        input: [
          "acid",
          "copper",
          "gold",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "plastic",
          "silicon_wafer",
          "water",
        ],
        output: [
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
        ],
      },
    },
    mill: {
      id: "mill",
      icon: "FoodMill.png",
      name: "Mill",
      workers: 5,
      category: "food_production",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -30,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: [
        "canola_milling",
        "corn_milling_wet",
        "soybean_milling",
        "wheat_milling",
      ],
      products: {
        input: ["canola", "corn", "soybean", "water", "wheat"],
        output: ["animal_feed", "cooking_oil", "corn_mash", "flour"],
      },
    },
    mine_control_tower: {
      id: "mine_control_tower",
      icon: "MineTower.png",
      name: "Mine Control Tower",
      workers: 0,
      category: "buildings_for_vehicles",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    mixer: {
      id: "mixer",
      icon: "IndustrialMixer.png",
      name: "Mixer",
      workers: 5,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: [
        "acid_mixing",
        "animal_feed_production",
        "animal_feed_production_2",
        "animal_feed_production_3",
        "animal_feed_production_4",
        "brine_production",
        "composing",
        "composing_2",
        "composing_3",
        "fertilizer_ii_synthesis",
        "fertilizer_mixing",
        "filter_media_mixing",
        "glass_mix_mixing",
        "glass_mix_mixing_2",
        "sulfur_neutralization",
      ],
      products: {
        input: [
          "acid",
          "animal_feed",
          "biomass",
          "coal",
          "compost",
          "corn",
          "fertilizer_i",
          "gravel",
          "limestone",
          "meat_trimmings",
          "potato",
          "salt",
          "sand",
          "soybean",
          "sulfur",
          "water",
          "wheat",
        ],
        output: [
          "acid",
          "animal_feed",
          "brine",
          "compost",
          "fertilizer_ii",
          "fertilizer_organic",
          "filter_media",
          "glass_mix",
          "slag",
        ],
      },
    },
    nuclear_reactor: {
      id: "nuclear_reactor",
      icon: "NuclearReactor.png",
      name: "Nuclear Reactor",
      workers: 80,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 32,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 800,
        },
        {
          product: "electronics_ii",
          quantity: 80,
        },
      ],
      recipes: ["nuclearreactor"],
      products: {
        input: ["uranium_rod", "water"],
        output: ["spent_fuel", "steam_hi"],
      },
    },
    oil_pump: {
      id: "oil_pump",
      icon: "OilPump.png",
      name: "Oil Pump",
      workers: 1,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: ["oil_pumping"],
      products: {
        input: [],
        output: ["crude_oil"],
      },
    },
    oxygen_furnace: {
      id: "oxygen_furnace",
      icon: "OxygenFurnace.png",
      name: "Oxygen Furnace",
      workers: 6,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -25,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 60,
        },
      ],
      recipes: ["steel_smelting"],
      products: {
        input: ["molten_iron", "oxygen"],
        output: ["exhaust", "molten_steel"],
      },
    },
    oxygen_furnace_ii: {
      id: "oxygen_furnace_ii",
      icon: "OxygenFurnaceT2.png",
      name: "Oxygen Furnace II",
      workers: 10,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: -40,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 70,
        },
      ],
      recipes: ["steel_smelting_2"],
      products: {
        input: ["molten_iron", "oxygen"],
        output: ["exhaust", "molten_steel"],
      },
    },
    polymerization_plant: {
      id: "polymerization_plant",
      icon: "PolymerizationPlant.png",
      name: "Polymerization Plant",
      workers: 12,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: -100,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 100,
        },
      ],
      recipes: ["plastic_making", "plastic_making_2"],
      products: {
        input: ["chlorine", "ethanol", "naphtha"],
        output: ["exhaust", "plastic"],
      },
    },
    power_generator: {
      id: "power_generator",
      icon: "PowerGeneratorT1.png",
      name: "Power Generator",
      workers: 0,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 1,
      },
      electricityProduction: 300,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 20,
        },
        {
          product: "electronics",
          quantity: 20,
        },
      ],
      recipes: ["powergeneratort1"],
      products: {
        input: ["mechanical_power"],
        output: ["electricity"],
      },
    },
    power_generator_ii: {
      id: "power_generator_ii",
      icon: "PowerGeneratorT2.png",
      name: "Power Generator II",
      workers: 0,
      category: "power_production",
      maintenance: {
        type: "1",
        quantity: 8,
      },
      electricityProduction: 2500,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 80,
        },
        {
          product: "electronics",
          quantity: 180,
        },
      ],
      recipes: ["powergeneratort2"],
      products: {
        input: ["mechanical_power"],
        output: ["electricity"],
      },
    },
    rainwater_harvester: {
      id: "rainwater_harvester",
      icon: "RainwaterHarvester.png",
      name: "Rainwater Harvester",
      workers: 0,
      category: "water_extraction_and_processing",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
        {
          product: "wood",
          quantity: 30,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    recyclables_collection: {
      id: "recyclables_collection",
      icon: "SettlementRecyclablesModule.png",
      name: "Recyclables Collection",
      workers: 12,
      category: "housing_and_services",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    research_lab: {
      id: "research_lab",
      icon: "ResearchLab1.png",
      name: "Research Lab",
      workers: 4,
      category: "buildings",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    research_lab_ii: {
      id: "research_lab_ii",
      icon: "ResearchLab2.png",
      name: "Research Lab II",
      workers: 8,
      category: "buildings",
      maintenance: {
        type: "1",
        quantity: 8,
      },
      electricityProduction: -50,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 60,
        },
        {
          product: "lab_equipment",
          quantity: 10,
        },
      ],
      recipes: ["research_lab_ii"],
      products: {
        input: ["lab_equipment"],
        output: ["recyclables"],
      },
    },
    research_lab_iii: {
      id: "research_lab_iii",
      icon: "ResearchLab3.png",
      name: "Research Lab III",
      workers: 16,
      category: "buildings",
      maintenance: {
        type: "1",
        quantity: 12,
      },
      electricityProduction: -90,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 120,
        },
        {
          product: "lab_equipment_ii",
          quantity: 20,
        },
      ],
      recipes: ["research_lab_iii"],
      products: {
        input: ["lab_equipment_ii"],
        output: ["recyclables"],
      },
    },
    research_lab_iv: {
      id: "research_lab_iv",
      icon: "ResearchLab4.png",
      name: "Research Lab IV",
      workers: 30,
      category: "buildings",
      maintenance: {
        type: "1",
        quantity: 16,
      },
      electricityProduction: -150,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 220,
        },
        {
          product: "glass",
          quantity: 60,
        },
        {
          product: "lab_equipment_iii",
          quantity: 20,
        },
      ],
      recipes: ["research_lab_iv"],
      products: {
        input: ["lab_equipment_iii"],
        output: ["recyclables"],
      },
    },
    research_lab_v: {
      id: "research_lab_v",
      icon: "ResearchLab5.png",
      name: "Research Lab V",
      workers: 48,
      category: "buildings",
      maintenance: {
        type: "2",
        quantity: 16,
      },
      electricityProduction: -250,
      computingProduction: -12,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 200,
        },
        {
          product: "glass",
          quantity: 160,
        },
        {
          product: "lab_equipment_iv",
          quantity: 20,
        },
      ],
      recipes: ["research_lab_v"],
      products: {
        input: ["lab_equipment_iv"],
        output: ["recyclables"],
      },
    },
    rock_mine: {
      id: "rock_mine",
      icon: "MineTower.png",
      name: "Rock Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["rock_mining"],
      products: {
        input: [],
        output: ["rock"],
      },
    },
    rocket_assembly_depot: {
      id: "rocket_assembly_depot",
      icon: "RocketAssemblyDepot.png",
      name: "Rocket Assembly Depot",
      workers: 160,
      category: "buildings",
      electricityProduction: -500,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 1200,
        },
        {
          product: "vehicle_parts_iii",
          quantity: 160,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    rocket_launch_pad: {
      id: "rocket_launch_pad",
      icon: "RocketLaunchPad.png",
      name: "Rocket Launch Pad",
      workers: 30,
      category: "buildings",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 300,
        },
        {
          product: "concrete_slab",
          quantity: 1000,
        },
        {
          product: "steel",
          quantity: 800,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    rotary_kiln: {
      id: "rotary_kiln",
      icon: "RotaryKiln.png",
      name: "Rotary Kiln",
      workers: 6,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 60,
        },
      ],
      recipes: ["cement_production"],
      products: {
        input: ["coal", "limestone"],
        output: ["cement", "exhaust"],
      },
    },
    rotary_kiln_gas: {
      id: "rotary_kiln_gas",
      icon: "RotaryKilnGas.png",
      name: "Rotary Kiln (Gas)",
      workers: 10,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 60,
        },
      ],
      recipes: ["cement_production_2", "cement_production_3"],
      products: {
        input: ["fuel_gas", "hydrogen", "limestone"],
        output: ["cement", "exhaust"],
      },
    },
    rubber_maker: {
      id: "rubber_maker",
      icon: "VacuumDistillationTower.png",
      name: "Rubber Maker",
      workers: 6,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -80,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 60,
        },
      ],
      recipes: [
        "rubber_production",
        "rubber_production_alt",
        "rubber_production_coal",
        "rubber_production_coal_alt",
        "rubber_production_ethanol",
      ],
      products: {
        input: ["coal", "diesel", "ethanol", "naphtha", "sulfur"],
        output: ["rubber", "waste_water"],
      },
    },
    sand_mine: {
      id: "sand_mine",
      icon: "MineTower.png",
      name: "Sand Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["sand_mining"],
      products: {
        input: [],
        output: ["sand"],
      },
    },
    seawater_pump: {
      id: "seawater_pump",
      icon: "OceanWaterPumpT1.png",
      name: "Seawater Pump",
      workers: 2,
      category: "water_extraction_and_processing",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 50,
        },
      ],
      recipes: ["ocean_water_pumping"],
      products: {
        input: [],
        output: ["seawater"],
      },
    },
    seawater_pump_tall: {
      id: "seawater_pump_tall",
      icon: "OceanWaterPumpLarge.png",
      name: "Seawater Pump (Tall)",
      workers: 3,
      category: "water_extraction_and_processing",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -60,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 50,
        },
      ],
      recipes: ["ocean_water_pumping_ii"],
      products: {
        input: [],
        output: ["seawater"],
      },
    },
    settling_tank: {
      id: "settling_tank",
      icon: "SettlingTank.png",
      name: "Settling Tank",
      workers: 6,
      category: "general_machines",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -30,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 80,
        },
      ],
      recipes: ["fluoride_leaching", "gold_settling", "uranium_leaching"],
      products: {
        input: ["acid", "gold_ore_powder", "rock", "uranium_ore_crushed"],
        output: [
          "gold_ore_concentrate",
          "hydrogen_fluoride",
          "slag",
          "toxic_slurry",
          "yellow_cake",
        ],
      },
    },
    silicon_crystallizer: {
      id: "silicon_crystallizer",
      icon: "SiliconCrystallizer.png",
      name: "Silicon Crystallizer",
      workers: 8,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "2",
        quantity: 5,
      },
      electricityProduction: -50,
      computingProduction: -4,
      buildCosts: [
        {
          product: "construction_parts_iv",
          quantity: 30,
        },
      ],
      recipes: ["silicon_crystallization"],
      products: {
        input: ["silicon_poly", "water"],
        output: ["silicon_wafer"],
      },
    },
    silicon_reactor: {
      id: "silicon_reactor",
      icon: "SiliconReactor.png",
      name: "Silicon Reactor",
      workers: 2,
      category: "metallurgy_and_smelting",
      maintenance: {
        type: "1",
        quantity: 1,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 20,
        },
      ],
      recipes: ["silicon_treatment"],
      products: {
        input: ["hydrogen", "molten_silicon"],
        output: ["silicon_poly"],
      },
    },
    slag_crushed_mine: {
      id: "slag_crushed_mine",
      icon: "MineTower.png",
      name: "Slag Crushed Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["slag_crushed_mining"],
      products: {
        input: [],
        output: ["slag_crushed"],
      },
    },
    slag_mine: {
      id: "slag_mine",
      icon: "MineTower.png",
      name: "Slag Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["slag_mining"],
      products: {
        input: [],
        output: ["slag"],
      },
    },
    smoke_stack: {
      id: "smoke_stack",
      icon: "SmokeStack.png",
      name: "Smoke Stack",
      workers: 0,
      category: "waste_management",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 10,
        },
      ],
      recipes: [
        "product_disposal",
        "product_disposal_2",
        "product_disposal_3",
        "product_disposal_4",
        "product_disposal_5",
        "product_disposal_6",
        "product_disposal_7",
      ],
      products: {
        input: [
          "carbon_dioxide",
          "exhaust",
          "nitrogen",
          "oxygen",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
        ],
        output: ["air_pollution"],
      },
    },
    smoke_stack_large: {
      id: "smoke_stack_large",
      icon: "SmokeStackLarge.png",
      name: "Smoke Stack (Large)",
      workers: 0,
      category: "waste_management",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 10,
        },
        {
          product: "concrete_slab",
          quantity: 40,
        },
      ],
      recipes: [
        "product_disposal_10",
        "product_disposal_11",
        "product_disposal_12",
        "product_disposal_13",
        "product_disposal_14",
        "product_disposal_8",
        "product_disposal_9",
      ],
      products: {
        input: [
          "carbon_dioxide",
          "exhaust",
          "nitrogen",
          "oxygen",
          "steam_depleted",
          "steam_hi",
          "steam_lo",
        ],
        output: ["air_pollution"],
      },
    },
    solar_panel: {
      id: "solar_panel",
      icon: "SolarPanel.png",
      name: "Solar Panel",
      workers: 0,
      category: "power_production",
      maintenance: {
        type: "2",
        quantity: 0.5996094,
      },
      electricityProduction: 32,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 20,
        },
        {
          product: "electronics_ii",
          quantity: 10,
        },
        {
          product: "solar_cell",
          quantity: 120,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    solar_panel_mono: {
      id: "solar_panel_mono",
      icon: "SolarPanelMono.png",
      name: "Solar Panel (Mono)",
      workers: 0,
      category: "power_production",
      maintenance: {
        type: "2",
        quantity: 0.5996094,
      },
      electricityProduction: 40,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 20,
        },
        {
          product: "electronics_ii",
          quantity: 10,
        },
        {
          product: "solar_cell_mono",
          quantity: 120,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    sour_water_stripper: {
      id: "sour_water_stripper",
      icon: "SourWaterStripper.png",
      name: "Sour Water Stripper",
      workers: 12,
      category: "crude_oil_refining",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: -40,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: ["sour_water_stripping_recovery"],
      products: {
        input: ["sour_water", "steam_hi"],
        output: ["ammonia", "sulfur", "water"],
      },
    },
    spent_fuel_storage: {
      id: "spent_fuel_storage",
      icon: "NuclearWasteStorage.png",
      name: "Spent Fuel Storage",
      workers: 10,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 150,
        },
        {
          product: "concrete_slab",
          quantity: 500,
        },
      ],
      recipes: [
        "anesthetics_storage_5",
        "antibiotics_storage_5",
        "bread_storage_5",
        "cake_storage_5",
        "cement_storage_5",
        "chicken_carcass_storage_5",
        "concrete_slab_storage_5",
        "construction_parts_ii_storage_5",
        "construction_parts_iii_storage_5",
        "construction_parts_iv_storage_5",
        "construction_parts_storage_5",
        "consumer_electronics_storage_5",
        "copper_storage_5",
        "disinfectant_storage_5",
        "eggs_storage_5",
        "electronics_ii_storage_5",
        "electronics_iii_storage_5",
        "electronics_storage_5",
        "flour_storage_5",
        "flowers_storage_5",
        "food_pack_storage_5",
        "fruit_storage_5",
        "glass_storage_5",
        "gold_storage_5",
        "graphite_storage_5",
        "household_appliances_storage_5",
        "household_goods_storage_5",
        "impure_copper_storage_5",
        "iron_storage_5",
        "lab_equipment_ii_storage_5",
        "lab_equipment_iii_storage_5",
        "lab_equipment_iv_storage_5",
        "lab_equipment_storage_5",
        "liquid_nitrogen_storage_5",
        "meat_storage_5",
        "mechanical_parts_storage_5",
        "medical_equipment_storage_5",
        "medical_supplies_ii_storage_5",
        "medical_supplies_iii_storage_5",
        "medical_supplies_storage_5",
        "microchips_stage_1_a_storage_5",
        "microchips_stage_1_b_storage_5",
        "microchips_stage_1_c_storage_5",
        "microchips_stage_2_a_storage_5",
        "microchips_stage_2_b_storage_5",
        "microchips_stage_2_c_storage_5",
        "microchips_stage_3_a_storage_5",
        "microchips_stage_3_b_storage_5",
        "microchips_stage_3_c_storage_5",
        "microchips_stage_4_a_storage_5",
        "microchips_stage_4_b_storage_5",
        "microchips_storage_5",
        "morphine_storage_5",
        "pcb_storage_5",
        "plastic_storage_5",
        "rubber_storage_5",
        "sausage_storage_5",
        "server_storage_5",
        "silicon_poly_storage_5",
        "silicon_wafer_storage_5",
        "snack_storage_5",
        "solar_cell_mono_storage_5",
        "solar_cell_storage_5",
        "spent_fuel_storage_5",
        "steel_storage_5",
        "tofu_storage_5",
        "uranium_pellets_storage_5",
        "uranium_rod_storage_5",
        "vegetables_storage_5",
        "vehicle_parts_ii_storage_5",
        "vehicle_parts_iii_storage_5",
        "vehicle_parts_storage_5",
        "wood_storage_5",
      ],
      products: {
        input: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
        output: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
      },
    },
    thermal_desalinator: {
      id: "thermal_desalinator",
      icon: "ThermalDesalinator.png",
      name: "Thermal Desalinator",
      workers: 4,
      category: "water_extraction_and_processing",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -40,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 30,
        },
        {
          product: "steel",
          quantity: 30,
        },
      ],
      recipes: [
        "thermal_desalination",
        "thermal_desalination_2",
        "thermal_desalination_3",
      ],
      products: {
        input: ["seawater", "steam_depleted", "steam_hi", "steam_lo"],
        output: ["brine", "water"],
      },
    },
    unit_module_l: {
      id: "unit_module_l",
      icon: "CargoDepotModuleUnitT3.png",
      name: "Unit Module (L)",
      workers: 5,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 4,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 120,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    unit_module_m: {
      id: "unit_module_m",
      icon: "CargoDepotModuleUnitT2.png",
      name: "Unit Module (M)",
      workers: 4,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 3,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 60,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    unit_module_s: {
      id: "unit_module_s",
      icon: "CargoDepotModuleUnitT1.png",
      name: "Unit Module (S)",
      workers: 3,
      category: "cargo_docks",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    unit_storage: {
      id: "unit_storage",
      icon: "StorageUnit.png",
      name: "Unit Storage",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 30,
        },
      ],
      recipes: [
        "anesthetics_storage_4",
        "antibiotics_storage_4",
        "bread_storage_4",
        "cake_storage_4",
        "cement_storage_4",
        "chicken_carcass_storage_4",
        "concrete_slab_storage_4",
        "construction_parts_ii_storage_4",
        "construction_parts_iii_storage_4",
        "construction_parts_iv_storage_4",
        "construction_parts_storage_4",
        "consumer_electronics_storage_4",
        "copper_storage_4",
        "disinfectant_storage_4",
        "eggs_storage_4",
        "electronics_ii_storage_4",
        "electronics_iii_storage_4",
        "electronics_storage_4",
        "flour_storage_4",
        "flowers_storage_4",
        "food_pack_storage_4",
        "fruit_storage_4",
        "glass_storage_4",
        "gold_storage_4",
        "graphite_storage_4",
        "household_appliances_storage_4",
        "household_goods_storage_4",
        "impure_copper_storage_4",
        "iron_storage_4",
        "lab_equipment_ii_storage_4",
        "lab_equipment_iii_storage_4",
        "lab_equipment_iv_storage_4",
        "lab_equipment_storage_4",
        "liquid_nitrogen_storage_4",
        "meat_storage_4",
        "mechanical_parts_storage_4",
        "medical_equipment_storage_4",
        "medical_supplies_ii_storage_4",
        "medical_supplies_iii_storage_4",
        "medical_supplies_storage_4",
        "microchips_stage_1_a_storage_4",
        "microchips_stage_1_b_storage_4",
        "microchips_stage_1_c_storage_4",
        "microchips_stage_2_a_storage_4",
        "microchips_stage_2_b_storage_4",
        "microchips_stage_2_c_storage_4",
        "microchips_stage_3_a_storage_4",
        "microchips_stage_3_b_storage_4",
        "microchips_stage_3_c_storage_4",
        "microchips_stage_4_a_storage_4",
        "microchips_stage_4_b_storage_4",
        "microchips_storage_4",
        "morphine_storage_4",
        "pcb_storage_4",
        "plastic_storage_4",
        "rubber_storage_4",
        "sausage_storage_4",
        "server_storage_4",
        "silicon_poly_storage_4",
        "silicon_wafer_storage_4",
        "snack_storage_4",
        "solar_cell_mono_storage_4",
        "solar_cell_storage_4",
        "spent_fuel_storage_4",
        "steel_storage_4",
        "tofu_storage_4",
        "uranium_pellets_storage_4",
        "uranium_rod_storage_4",
        "vegetables_storage_4",
        "vehicle_parts_ii_storage_4",
        "vehicle_parts_iii_storage_4",
        "vehicle_parts_storage_4",
        "wood_storage_4",
      ],
      products: {
        input: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
        output: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
      },
    },
    unit_storage_ii: {
      id: "unit_storage_ii",
      icon: "StorageUnitT2.png",
      name: "Unit Storage II",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 30,
        },
      ],
      recipes: [
        "anesthetics_storage_3",
        "antibiotics_storage_3",
        "bread_storage_3",
        "cake_storage_3",
        "cement_storage_3",
        "chicken_carcass_storage_3",
        "concrete_slab_storage_3",
        "construction_parts_ii_storage_3",
        "construction_parts_iii_storage_3",
        "construction_parts_iv_storage_3",
        "construction_parts_storage_3",
        "consumer_electronics_storage_3",
        "copper_storage_3",
        "disinfectant_storage_3",
        "eggs_storage_3",
        "electronics_ii_storage_3",
        "electronics_iii_storage_3",
        "electronics_storage_3",
        "flour_storage_3",
        "flowers_storage_3",
        "food_pack_storage_3",
        "fruit_storage_3",
        "glass_storage_3",
        "gold_storage_3",
        "graphite_storage_3",
        "household_appliances_storage_3",
        "household_goods_storage_3",
        "impure_copper_storage_3",
        "iron_storage_3",
        "lab_equipment_ii_storage_3",
        "lab_equipment_iii_storage_3",
        "lab_equipment_iv_storage_3",
        "lab_equipment_storage_3",
        "liquid_nitrogen_storage_3",
        "meat_storage_3",
        "mechanical_parts_storage_3",
        "medical_equipment_storage_3",
        "medical_supplies_ii_storage_3",
        "medical_supplies_iii_storage_3",
        "medical_supplies_storage_3",
        "microchips_stage_1_a_storage_3",
        "microchips_stage_1_b_storage_3",
        "microchips_stage_1_c_storage_3",
        "microchips_stage_2_a_storage_3",
        "microchips_stage_2_b_storage_3",
        "microchips_stage_2_c_storage_3",
        "microchips_stage_3_a_storage_3",
        "microchips_stage_3_b_storage_3",
        "microchips_stage_3_c_storage_3",
        "microchips_stage_4_a_storage_3",
        "microchips_stage_4_b_storage_3",
        "microchips_storage_3",
        "morphine_storage_3",
        "pcb_storage_3",
        "plastic_storage_3",
        "rubber_storage_3",
        "sausage_storage_3",
        "server_storage_3",
        "silicon_poly_storage_3",
        "silicon_wafer_storage_3",
        "snack_storage_3",
        "solar_cell_mono_storage_3",
        "solar_cell_storage_3",
        "spent_fuel_storage_3",
        "steel_storage_3",
        "tofu_storage_3",
        "uranium_pellets_storage_3",
        "uranium_rod_storage_3",
        "vegetables_storage_3",
        "vehicle_parts_ii_storage_3",
        "vehicle_parts_iii_storage_3",
        "vehicle_parts_storage_3",
        "wood_storage_3",
      ],
      products: {
        input: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
        output: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
      },
    },
    unit_storage_iii: {
      id: "unit_storage_iii",
      icon: "StorageUnitT3.png",
      name: "Unit Storage III",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 90,
        },
      ],
      recipes: [
        "anesthetics_storage_2",
        "antibiotics_storage_2",
        "bread_storage_2",
        "cake_storage_2",
        "cement_storage_2",
        "chicken_carcass_storage_2",
        "concrete_slab_storage_2",
        "construction_parts_ii_storage_2",
        "construction_parts_iii_storage_2",
        "construction_parts_iv_storage_2",
        "construction_parts_storage_2",
        "consumer_electronics_storage_2",
        "copper_storage_2",
        "disinfectant_storage_2",
        "eggs_storage_2",
        "electronics_ii_storage_2",
        "electronics_iii_storage_2",
        "electronics_storage_2",
        "flour_storage_2",
        "flowers_storage_2",
        "food_pack_storage_2",
        "fruit_storage_2",
        "glass_storage_2",
        "gold_storage_2",
        "graphite_storage_2",
        "household_appliances_storage_2",
        "household_goods_storage_2",
        "impure_copper_storage_2",
        "iron_storage_2",
        "lab_equipment_ii_storage_2",
        "lab_equipment_iii_storage_2",
        "lab_equipment_iv_storage_2",
        "lab_equipment_storage_2",
        "liquid_nitrogen_storage_2",
        "meat_storage_2",
        "mechanical_parts_storage_2",
        "medical_equipment_storage_2",
        "medical_supplies_ii_storage_2",
        "medical_supplies_iii_storage_2",
        "medical_supplies_storage_2",
        "microchips_stage_1_a_storage_2",
        "microchips_stage_1_b_storage_2",
        "microchips_stage_1_c_storage_2",
        "microchips_stage_2_a_storage_2",
        "microchips_stage_2_b_storage_2",
        "microchips_stage_2_c_storage_2",
        "microchips_stage_3_a_storage_2",
        "microchips_stage_3_b_storage_2",
        "microchips_stage_3_c_storage_2",
        "microchips_stage_4_a_storage_2",
        "microchips_stage_4_b_storage_2",
        "microchips_storage_2",
        "morphine_storage_2",
        "pcb_storage_2",
        "plastic_storage_2",
        "rubber_storage_2",
        "sausage_storage_2",
        "server_storage_2",
        "silicon_poly_storage_2",
        "silicon_wafer_storage_2",
        "snack_storage_2",
        "solar_cell_mono_storage_2",
        "solar_cell_storage_2",
        "spent_fuel_storage_2",
        "steel_storage_2",
        "tofu_storage_2",
        "uranium_pellets_storage_2",
        "uranium_rod_storage_2",
        "vegetables_storage_2",
        "vehicle_parts_ii_storage_2",
        "vehicle_parts_iii_storage_2",
        "vehicle_parts_storage_2",
        "wood_storage_2",
      ],
      products: {
        input: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
        output: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
      },
    },
    unit_storage_iv: {
      id: "unit_storage_iv",
      icon: "StorageUnitT4.png",
      name: "Unit Storage IV",
      workers: 0,
      category: "storage",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 180,
        },
      ],
      recipes: [
        "anesthetics_storage",
        "antibiotics_storage",
        "bread_storage",
        "cake_storage",
        "cement_storage",
        "chicken_carcass_storage",
        "concrete_slab_storage",
        "construction_parts_ii_storage",
        "construction_parts_iii_storage",
        "construction_parts_iv_storage",
        "construction_parts_storage",
        "consumer_electronics_storage",
        "copper_storage",
        "disinfectant_storage",
        "eggs_storage",
        "electronics_ii_storage",
        "electronics_iii_storage",
        "electronics_storage",
        "flour_storage",
        "flowers_storage",
        "food_pack_storage",
        "fruit_storage",
        "glass_storage",
        "gold_storage",
        "graphite_storage",
        "household_appliances_storage",
        "household_goods_storage",
        "impure_copper_storage",
        "iron_storage",
        "lab_equipment_ii_storage",
        "lab_equipment_iii_storage",
        "lab_equipment_iv_storage",
        "lab_equipment_storage",
        "liquid_nitrogen_storage",
        "meat_storage",
        "mechanical_parts_storage",
        "medical_equipment_storage",
        "medical_supplies_ii_storage",
        "medical_supplies_iii_storage",
        "medical_supplies_storage",
        "microchips_stage_1_a_storage",
        "microchips_stage_1_b_storage",
        "microchips_stage_1_c_storage",
        "microchips_stage_2_a_storage",
        "microchips_stage_2_b_storage",
        "microchips_stage_2_c_storage",
        "microchips_stage_3_a_storage",
        "microchips_stage_3_b_storage",
        "microchips_stage_3_c_storage",
        "microchips_stage_4_a_storage",
        "microchips_stage_4_b_storage",
        "microchips_storage",
        "morphine_storage",
        "pcb_storage",
        "plastic_storage",
        "rubber_storage",
        "sausage_storage",
        "server_storage",
        "silicon_poly_storage",
        "silicon_wafer_storage",
        "snack_storage",
        "solar_cell_mono_storage",
        "solar_cell_storage",
        "spent_fuel_storage",
        "steel_storage",
        "tofu_storage",
        "uranium_pellets_storage",
        "uranium_rod_storage",
        "vegetables_storage",
        "vehicle_parts_ii_storage",
        "vehicle_parts_iii_storage",
        "vehicle_parts_storage",
        "wood_storage",
      ],
      products: {
        input: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
        output: [
          "anesthetics",
          "antibiotics",
          "bread",
          "cake",
          "cement",
          "chicken_carcass",
          "concrete_slab",
          "construction_parts",
          "construction_parts_ii",
          "construction_parts_iii",
          "construction_parts_iv",
          "consumer_electronics",
          "copper",
          "disinfectant",
          "eggs",
          "electronics",
          "electronics_ii",
          "electronics_iii",
          "flour",
          "flowers",
          "food_pack",
          "fruit",
          "glass",
          "gold",
          "graphite",
          "household_appliances",
          "household_goods",
          "impure_copper",
          "iron",
          "lab_equipment",
          "lab_equipment_ii",
          "lab_equipment_iii",
          "lab_equipment_iv",
          "liquid_nitrogen",
          "meat",
          "mechanical_parts",
          "medical_equipment",
          "medical_supplies",
          "medical_supplies_ii",
          "medical_supplies_iii",
          "microchips",
          "microchips_stage_1_a",
          "microchips_stage_1_b",
          "microchips_stage_1_c",
          "microchips_stage_2_a",
          "microchips_stage_2_b",
          "microchips_stage_2_c",
          "microchips_stage_3_a",
          "microchips_stage_3_b",
          "microchips_stage_3_c",
          "microchips_stage_4_a",
          "microchips_stage_4_b",
          "morphine",
          "pcb",
          "plastic",
          "rubber",
          "sausage",
          "server",
          "silicon_poly",
          "silicon_wafer",
          "snack",
          "solar_cell",
          "solar_cell_mono",
          "spent_fuel",
          "steel",
          "tofu",
          "uranium_pellets",
          "uranium_rod",
          "vegetables",
          "vehicle_parts",
          "vehicle_parts_ii",
          "vehicle_parts_iii",
          "wood",
        ],
      },
    },
    vehicles_depot: {
      id: "vehicles_depot",
      icon: "VehiclesDepot.png",
      name: "Vehicles Depot",
      workers: 6,
      category: "buildings_for_vehicles",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 40,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    vehicles_depot_ii: {
      id: "vehicles_depot_ii",
      icon: "VehiclesDepotT2.png",
      name: "Vehicles Depot II",
      workers: 10,
      category: "buildings_for_vehicles",
      electricityProduction: -80,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 120,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    vehicles_depot_iii: {
      id: "vehicles_depot_iii",
      icon: "VehiclesDepotT3.png",
      name: "Vehicles Depot III",
      workers: 16,
      category: "buildings_for_vehicles",
      electricityProduction: -160,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 280,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    waste_collection: {
      id: "waste_collection",
      icon: "SettlementLandfillModule.png",
      name: "Waste Collection",
      workers: 4,
      category: "housing_and_services",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 25,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
    waste_mine: {
      id: "waste_mine",
      icon: "MineTower.png",
      name: "Waste Mine",
      workers: 0,
      category: "mines",
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts",
          quantity: 20,
        },
      ],
      recipes: ["waste_mining"],
      products: {
        input: [],
        output: ["waste"],
      },
    },
    waste_sorting_plant: {
      id: "waste_sorting_plant",
      icon: "WasteSortingPlant.png",
      name: "Waste Sorting Plant",
      workers: 45,
      category: "waste_management",
      maintenance: {
        type: "1",
        quantity: 20,
      },
      electricityProduction: 0,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 400,
        },
      ],
      recipes: ["wastesortingplant"],
      products: {
        input: ["recyclables"],
        output: ["broken_glass", "copper_scrap", "gold_scrap", "iron_scrap"],
      },
    },
    wastewater_treatment: {
      id: "wastewater_treatment",
      icon: "WaterTreatmentPlant.png",
      name: "Wastewater Treatment",
      workers: 26,
      category: "waste_management",
      maintenance: {
        type: "1",
        quantity: 10,
      },
      electricityProduction: -180,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 140,
        },
      ],
      recipes: [
        "toxic_slurry_treatment",
        "water_treatment",
        "water_treatment_advanced",
      ],
      products: {
        input: [
          "brine",
          "chlorine",
          "filter_media",
          "sand",
          "toxic_slurry",
          "waste_water",
        ],
        output: ["slag", "sludge", "water"],
      },
    },
    water_chiller: {
      id: "water_chiller",
      icon: "WaterChiller.png",
      name: "Water Chiller",
      workers: 3,
      category: "water_extraction_and_processing",
      maintenance: {
        type: "1",
        quantity: 2,
      },
      electricityProduction: -80,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_iii",
          quantity: 40,
        },
      ],
      recipes: ["water_cooling"],
      products: {
        input: ["water"],
        output: ["chilled_water"],
      },
    },
    water_facility: {
      id: "water_facility",
      icon: "SettlementWaterModule.png",
      name: "Water Facility",
      workers: 6,
      category: "housing_and_services",
      maintenance: {
        type: "1",
        quantity: 6,
      },
      electricityProduction: -20,
      computingProduction: 0,
      buildCosts: [
        {
          product: "construction_parts_ii",
          quantity: 40,
        },
      ],
      recipes: [],
      products: {
        input: [],
        output: [],
      },
    },
  },
  products: {
    acid: {
      id: "acid",
      icon: "Acid.png",
      name: "Acid",
      machines: {
        input: [
          "chemical_plant_ii",
          "copper_electrolysis",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "liquid_dump",
          "microchip_machine",
          "microchip_machine_ii",
          "mixer",
          "settling_tank",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "mixer",
        ],
      },
      recipes: {
        input: [
          "acid_dumping",
          "acid_storage",
          "acid_storage_2",
          "acid_storage_3",
          "acid_storage_4",
          "copper_purification_acid",
          "fluoride_leaching",
          "glass_mix_mixing_2",
          "gold_settling",
          "microchip_manufacturing_stage_1a",
          "microchip_manufacturing_stage_1a_2",
          "microchip_manufacturing_stage_1b",
          "microchip_manufacturing_stage_1b_2",
          "microchip_manufacturing_stage_1c",
          "microchip_manufacturing_stage_1c_2",
          "microchip_manufacturing_stage_1d",
          "microchip_manufacturing_stage_1d_2",
          "morphine_production",
          "uranium_leaching",
        ],
        output: [
          "acid_mixing",
          "acid_storage",
          "acid_storage_2",
          "acid_storage_3",
          "acid_storage_4",
        ],
      },
    },
    air_pollution: {
      id: "air_pollution",
      icon: "AirPollution.png",
      name: "Air Pollution",
      machines: {
        input: [],
        output: [
          "burner_solid",
          "diesel_generator",
          "exhaust_scrubber",
          "flare",
          "smoke_stack",
          "smoke_stack_large",
        ],
      },
      recipes: {
        input: [],
        output: [
          "ammonia_disposal",
          "burning",
          "burning_2",
          "burning_3",
          "burning_4",
          "burning_5",
          "burning_6",
          "burning_7",
          "diesel_disposal",
          "dieselgenerator",
          "ethanol_disposal",
          "exhaust_filtering",
          "fuel_gas_disposal",
          "heavy_oil_disposal",
          "light_oil_disposal",
          "naphtha_disposal",
          "product_disposal_13",
          "product_disposal_14",
          "product_disposal_6",
          "product_disposal_7",
        ],
      },
    },
    ammonia: {
      id: "ammonia",
      icon: "Ammonia.png",
      name: "Ammonia",
      machines: {
        input: [
          "chemical_plant",
          "chemical_plant_ii",
          "electrolyzer",
          "fermentation_tank",
          "flare",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "chemical_plant",
          "chemical_plant_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "sour_water_stripper",
        ],
      },
      recipes: {
        input: [
          "ammonia_disposal",
          "ammonia_electrolysis",
          "ammonia_storage",
          "ammonia_storage_2",
          "ammonia_storage_3",
          "ammonia_storage_4",
          "anesthetics_production",
          "antibiotics",
          "fertilizer_synthesis",
          "fertilizer_synthesis_2",
        ],
        output: [
          "ammonia_storage",
          "ammonia_storage_2",
          "ammonia_storage_3",
          "ammonia_storage_4",
          "ammonia_synthesis",
          "ammonia_synthesis_2",
          "sour_water_stripping_recovery",
        ],
      },
    },
    anesthetics: {
      id: "anesthetics",
      icon: "Anesthetics.png",
      name: "Anesthetics",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "chemical_plant_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "anesthetics_storage",
          "anesthetics_storage_2",
          "anesthetics_storage_3",
          "anesthetics_storage_4",
          "anesthetics_storage_5",
          "medical_supplies_iii_assembly_t1",
          "medical_supplies_iii_assembly_t2",
        ],
        output: [
          "anesthetics_production",
          "anesthetics_storage",
          "anesthetics_storage_2",
          "anesthetics_storage_3",
          "anesthetics_storage_4",
          "anesthetics_storage_5",
        ],
      },
    },
    animal_feed: {
      id: "animal_feed",
      icon: "AnimalFeed.png",
      name: "Animal Feed",
      machines: {
        input: [
          "boiler_coal",
          "burner_solid",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
        output: [
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mill",
          "mixer",
        ],
      },
      recipes: {
        input: [
          "animal_feed_storage",
          "animal_feed_storage_2",
          "animal_feed_storage_3",
          "animal_feed_storage_4",
          "burning_3",
          "composing",
          "steam_generation_3",
        ],
        output: [
          "animal_feed_production",
          "animal_feed_production_2",
          "animal_feed_production_3",
          "animal_feed_production_4",
          "animal_feed_storage",
          "animal_feed_storage_2",
          "animal_feed_storage_3",
          "animal_feed_storage_4",
          "canola_milling",
          "corn_milling_wet",
          "soybean_milling",
          "tofu_making",
          "wheat_milling",
        ],
      },
    },
    antibiotics: {
      id: "antibiotics",
      icon: "Antibiotics.png",
      name: "Antibiotics",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "fermentation_tank",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "antibiotics_storage",
          "antibiotics_storage_2",
          "antibiotics_storage_3",
          "antibiotics_storage_4",
          "antibiotics_storage_5",
          "medical_supplies_assembly_t1_2",
          "medical_supplies_assembly_t2_2",
        ],
        output: [
          "antibiotics",
          "antibiotics_storage",
          "antibiotics_storage_2",
          "antibiotics_storage_3",
          "antibiotics_storage_4",
          "antibiotics_storage_5",
        ],
      },
    },
    biomass: {
      id: "biomass",
      icon: "Biomass.png",
      name: "Biomass",
      machines: {
        input: [
          "boiler_coal",
          "burner_solid",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
        output: [
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "biomass_storage",
          "biomass_storage_2",
          "biomass_storage_3",
          "biomass_storage_4",
          "burning_2",
          "composing_2",
          "steam_generation_2",
        ],
        output: [
          "biomass_storage",
          "biomass_storage_2",
          "biomass_storage_3",
          "biomass_storage_4",
          "snack_production",
          "snack_production_2",
          "sugar_refining_cane",
        ],
      },
    },
    bread: {
      id: "bread",
      icon: "Bread.png",
      name: "Bread",
      machines: {
        input: [
          "assembly_electric_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "baking_unit",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "bread_storage",
          "bread_storage_2",
          "bread_storage_3",
          "bread_storage_4",
          "bread_storage_5",
          "food_pack_assembly_eggs",
          "food_pack_assembly_meat",
        ],
        output: [
          "bread_making",
          "bread_storage",
          "bread_storage_2",
          "bread_storage_3",
          "bread_storage_4",
          "bread_storage_5",
        ],
      },
    },
    brine: {
      id: "brine",
      icon: "Brine.png",
      name: "Brine",
      machines: {
        input: [
          "electrolyzer",
          "evaporation_pond",
          "evaporation_pond_heated",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "liquid_dump",
          "wastewater_treatment",
        ],
        output: [
          "basic_distiller",
          "evaporation_pond",
          "evaporation_pond_heated",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "mixer",
          "thermal_desalinator",
        ],
      },
      recipes: {
        input: [
          "brine_dumping",
          "brine_electrolysis",
          "brine_storage",
          "brine_storage_2",
          "brine_storage_3",
          "brine_storage_4",
          "salt_making_2",
          "salt_making_4",
          "toxic_slurry_treatment",
        ],
        output: [
          "brine_making",
          "brine_making_2",
          "brine_production",
          "brine_storage",
          "brine_storage_2",
          "brine_storage_3",
          "brine_storage_4",
          "thermal_desalination",
          "thermal_desalination_2",
          "thermal_desalination_3",
          "water_desalination_basic",
        ],
      },
    },
    broken_glass: {
      id: "broken_glass",
      icon: "BrokenGlass.png",
      name: "Broken Glass",
      machines: {
        input: [
          "arc_furnace_ii",
          "blast_furnace",
          "blast_furnace_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "waste_sorting_plant",
        ],
      },
      recipes: {
        input: [
          "broken_glass_storage",
          "broken_glass_storage_2",
          "broken_glass_storage_3",
          "broken_glass_storage_4",
          "glass_broken_smelting",
          "glass_broken_smelting_2",
          "glass_smelting_4",
        ],
        output: [
          "broken_glass_storage",
          "broken_glass_storage_2",
          "broken_glass_storage_3",
          "broken_glass_storage_4",
          "wastesortingplant",
        ],
      },
    },
    cake: {
      id: "cake",
      icon: "Cake.png",
      name: "Cake",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "baking_unit",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cake_storage",
          "cake_storage_2",
          "cake_storage_3",
          "cake_storage_4",
          "cake_storage_5",
        ],
        output: [
          "cake_production",
          "cake_storage",
          "cake_storage_2",
          "cake_storage_3",
          "cake_storage_4",
          "cake_storage_5",
        ],
      },
    },
    canola: {
      id: "canola",
      icon: "Canola.png",
      name: "Canola",
      machines: {
        input: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mill",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "canola_milling",
          "canola_storage",
          "canola_storage_2",
          "canola_storage_3",
          "canola_storage_4",
        ],
        output: [
          "canola_storage",
          "canola_storage_2",
          "canola_storage_3",
          "canola_storage_4",
        ],
      },
    },
    carbon_dioxide: {
      id: "carbon_dioxide",
      icon: "CarbonDioxide.png",
      name: "Carbon Dioxide",
      machines: {
        input: [
          "chemical_plant_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "gas_injection_pump",
          "smoke_stack",
          "smoke_stack_large",
        ],
        output: [
          "boiler_gas",
          "cracking_unit",
          "exhaust_scrubber",
          "fermentation_tank",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "hydrogen_reformer",
        ],
      },
      recipes: {
        input: [
          "carbon_dioxide_storage",
          "carbon_dioxide_storage_2",
          "carbon_dioxide_storage_3",
          "carbon_dioxide_storage_4",
          "co2_injection",
          "fuelgas_synthesis",
          "graphite_production_2",
          "product_disposal_14",
          "product_disposal_7",
        ],
        output: [
          "antibiotics",
          "carbon_dioxide_storage",
          "carbon_dioxide_storage_2",
          "carbon_dioxide_storage_3",
          "carbon_dioxide_storage_4",
          "ethanol_making_corn",
          "ethanol_making_sugar",
          "exhaust_filtering",
          "fuelgas_reforming",
          "hydrogen_reforming",
          "steam_generation_8",
          "steam_generation_9",
        ],
      },
    },
    cement: {
      id: "cement",
      icon: "Cement.png",
      name: "Cement",
      machines: {
        input: [
          "concrete_mixer",
          "concrete_mixer_ii",
          "concrete_mixer_iii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "rotary_kiln",
          "rotary_kiln_gas",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cement_storage",
          "cement_storage_2",
          "cement_storage_3",
          "cement_storage_4",
          "cement_storage_5",
          "concrete_mixing",
          "concrete_mixing_2",
          "concrete_mixing_3",
          "concrete_mixing_4",
          "concrete_mixing_5",
          "concrete_mixing_6",
          "concrete_mixing_7",
          "concrete_mixing_8",
        ],
        output: [
          "cement_production",
          "cement_production_2",
          "cement_production_3",
          "cement_storage",
          "cement_storage_2",
          "cement_storage_3",
          "cement_storage_4",
          "cement_storage_5",
        ],
      },
    },
    chicken_carcass: {
      id: "chicken_carcass",
      icon: "ChickenCarcass.png",
      name: "Chicken Carcass",
      machines: {
        input: [
          "burner_solid",
          "food_processor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "burning_5",
          "chicken_carcass_storage",
          "chicken_carcass_storage_2",
          "chicken_carcass_storage_3",
          "chicken_carcass_storage_4",
          "chicken_carcass_storage_5",
          "meat_processing",
        ],
        output: [
          "chicken_carcass_storage",
          "chicken_carcass_storage_2",
          "chicken_carcass_storage_3",
          "chicken_carcass_storage_4",
          "chicken_carcass_storage_5",
        ],
      },
    },
    chilled_water: {
      id: "chilled_water",
      icon: "ChilledWater.png",
      name: "Chilled Water",
      machines: {
        input: [
          "basic_rack",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "water_chiller",
        ],
      },
      recipes: {
        input: [
          "chilled_water_storage",
          "chilled_water_storage_2",
          "chilled_water_storage_3",
          "chilled_water_storage_4",
          "create_computing_power",
        ],
        output: [
          "chilled_water_storage",
          "chilled_water_storage_2",
          "chilled_water_storage_3",
          "chilled_water_storage_4",
          "water_cooling",
        ],
      },
    },
    chlorine: {
      id: "chlorine",
      icon: "Chlorine.png",
      name: "Chlorine",
      machines: {
        input: [
          "chemical_plant_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "polymerization_plant",
          "wastewater_treatment",
        ],
        output: [
          "electrolyzer",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "chlorine_storage",
          "chlorine_storage_2",
          "chlorine_storage_3",
          "chlorine_storage_4",
          "graphite_production",
          "plastic_making",
          "plastic_making_2",
          "water_treatment",
          "water_treatment_advanced",
        ],
        output: [
          "brine_electrolysis",
          "chlorine_storage",
          "chlorine_storage_2",
          "chlorine_storage_3",
          "chlorine_storage_4",
        ],
      },
    },
    coal: {
      id: "coal",
      icon: "Coal.png",
      name: "Coal",
      machines: {
        input: [
          "arc_furnace",
          "arc_furnace_ii",
          "basic_distiller",
          "blast_furnace",
          "blast_furnace_ii",
          "boiler_coal",
          "chemical_plant_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
          "rotary_kiln",
          "rubber_maker",
        ],
        output: [
          "coal_maker",
          "coal_mine",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cement_production",
          "coal_storage",
          "coal_storage_2",
          "coal_storage_3",
          "coal_storage_4",
          "copper_scrap_smelting",
          "copper_scrap_smelting_2",
          "copper_smelting",
          "copper_smelting_sand",
          "diesel_distillation_basic",
          "filter_media_mixing",
          "glass_broken_smelting",
          "glass_broken_smelting_2",
          "glass_smelting",
          "glass_smelting_2",
          "graphite_production",
          "iron_scrap_smelting",
          "iron_scrap_smelting_2",
          "iron_smelting",
          "iron_smelting_lime",
          "rubber_production_coal",
          "rubber_production_coal_alt",
          "silicon_smelting_arc",
          "silicon_smelting_arc_ii",
          "steam_generation",
          "water_desalination_basic",
        ],
        output: [
          "charcoal_making",
          "coal_mining",
          "coal_storage",
          "coal_storage_2",
          "coal_storage_3",
          "coal_storage_4",
        ],
      },
    },
    compost: {
      id: "compost",
      icon: "Compost.png",
      name: "Compost",
      machines: {
        input: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
        output: [
          "anaerobic_digester",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
      },
      recipes: {
        input: [
          "compost_storage",
          "compost_storage_2",
          "compost_storage_3",
          "compost_storage_4",
          "fertilizer_mixing",
        ],
        output: [
          "composing",
          "composing_2",
          "composing_3",
          "compost_storage",
          "compost_storage_2",
          "compost_storage_3",
          "compost_storage_4",
          "digestion",
          "digestion_2",
          "digestion_3",
          "digestion_4",
        ],
      },
    },
    concrete_slab: {
      id: "concrete_slab",
      icon: "ConcreteSlab.png",
      name: "Concrete Slab",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "concrete_mixer",
          "concrete_mixer_ii",
          "concrete_mixer_iii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "concrete_slab_storage",
          "concrete_slab_storage_2",
          "concrete_slab_storage_3",
          "concrete_slab_storage_4",
          "concrete_slab_storage_5",
          "cp_assembly_t1",
          "cp_assembly_t2",
          "cp_assembly_t3",
          "cp_assembly_t3_2",
        ],
        output: [
          "concrete_mixing",
          "concrete_mixing_2",
          "concrete_mixing_3",
          "concrete_mixing_4",
          "concrete_mixing_5",
          "concrete_mixing_6",
          "concrete_mixing_7",
          "concrete_mixing_8",
          "concrete_slab_storage",
          "concrete_slab_storage_2",
          "concrete_slab_storage_3",
          "concrete_slab_storage_4",
          "concrete_slab_storage_5",
        ],
      },
    },
    construction_parts: {
      id: "construction_parts",
      icon: "ConstructionParts.png",
      name: "Construction Parts",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "construction_parts_storage",
          "construction_parts_storage_2",
          "construction_parts_storage_3",
          "construction_parts_storage_4",
          "construction_parts_storage_5",
          "cp2_assembly_t1",
          "cp2_assembly_t1_2",
          "cp2_assembly_t2",
          "cp2_assembly_t3",
        ],
        output: [
          "construction_parts_storage",
          "construction_parts_storage_2",
          "construction_parts_storage_3",
          "construction_parts_storage_4",
          "construction_parts_storage_5",
          "cp_assembly_t1",
          "cp_assembly_t2",
          "cp_assembly_t3",
          "cp_assembly_t3_2",
        ],
      },
    },
    construction_parts_ii: {
      id: "construction_parts_ii",
      icon: "ConstructionParts2.png",
      name: "Construction Parts II",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "construction_parts_ii_storage",
          "construction_parts_ii_storage_2",
          "construction_parts_ii_storage_3",
          "construction_parts_ii_storage_4",
          "construction_parts_ii_storage_5",
          "cp3_assembly_t1",
          "cp3_assembly_t2",
          "cp3_assembly_t3",
        ],
        output: [
          "construction_parts_ii_storage",
          "construction_parts_ii_storage_2",
          "construction_parts_ii_storage_3",
          "construction_parts_ii_storage_4",
          "construction_parts_ii_storage_5",
          "cp2_assembly_t1",
          "cp2_assembly_t1_2",
          "cp2_assembly_t2",
          "cp2_assembly_t3",
        ],
      },
    },
    construction_parts_iii: {
      id: "construction_parts_iii",
      icon: "ConstructionParts3.png",
      name: "Construction Parts III",
      machines: {
        input: [
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "construction_parts_iii_storage",
          "construction_parts_iii_storage_2",
          "construction_parts_iii_storage_3",
          "construction_parts_iii_storage_4",
          "construction_parts_iii_storage_5",
          "cp4_assembly_t1",
          "cp4_assembly_t2",
        ],
        output: [
          "construction_parts_iii_storage",
          "construction_parts_iii_storage_2",
          "construction_parts_iii_storage_3",
          "construction_parts_iii_storage_4",
          "construction_parts_iii_storage_5",
          "cp3_assembly_t1",
          "cp3_assembly_t2",
          "cp3_assembly_t3",
        ],
      },
    },
    construction_parts_iv: {
      id: "construction_parts_iv",
      icon: "ConstructionParts4.png",
      name: "Construction Parts IV",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "construction_parts_iv_storage",
          "construction_parts_iv_storage_2",
          "construction_parts_iv_storage_3",
          "construction_parts_iv_storage_4",
          "construction_parts_iv_storage_5",
        ],
        output: [
          "construction_parts_iv_storage",
          "construction_parts_iv_storage_2",
          "construction_parts_iv_storage_3",
          "construction_parts_iv_storage_4",
          "construction_parts_iv_storage_5",
          "cp4_assembly_t1",
          "cp4_assembly_t2",
        ],
      },
    },
    consumer_electronics: {
      id: "consumer_electronics",
      icon: "ConsumerElectronics.png",
      name: "Consumer Electronics",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "consumer_electronics_storage",
          "consumer_electronics_storage_2",
          "consumer_electronics_storage_3",
          "consumer_electronics_storage_4",
          "consumer_electronics_storage_5",
        ],
        output: [
          "consumer_electronics_assembly_t1",
          "consumer_electronics_storage",
          "consumer_electronics_storage_2",
          "consumer_electronics_storage_3",
          "consumer_electronics_storage_4",
          "consumer_electronics_storage_5",
        ],
      },
    },
    cooking_oil: {
      id: "cooking_oil",
      icon: "CookingOil.png",
      name: "Cooking Oil",
      machines: {
        input: [
          "baking_unit",
          "chemical_plant",
          "chemical_plant_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "food_processor",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "mill",
        ],
      },
      recipes: {
        input: [
          "cake_production",
          "cooking_oil_storage",
          "cooking_oil_storage_2",
          "cooking_oil_storage_3",
          "cooking_oil_storage_4",
          "fuel_transesterification",
          "fuel_transesterification_2",
          "snack_production",
          "snack_production_2",
        ],
        output: [
          "canola_milling",
          "cooking_oil_storage",
          "cooking_oil_storage_2",
          "cooking_oil_storage_3",
          "cooking_oil_storage_4",
          "soybean_milling",
        ],
      },
    },
    copper: {
      id: "copper",
      icon: "Copper.png",
      name: "Copper",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "assembly_robotic_ii",
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "copper_electrolysis",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "copper_storage",
          "copper_storage_2",
          "copper_storage_3",
          "copper_storage_4",
          "copper_storage_5",
          "electronics_assembly_t1",
          "electronics_assembly_t2",
          "electronics_assembly_t3",
          "electronics_assembly_t4",
          "electronics_assembly_t5",
          "microchip_manufacturing_stage_2a",
          "microchip_manufacturing_stage_2a_2",
          "microchip_manufacturing_stage_2b",
          "microchip_manufacturing_stage_2b_2",
          "microchip_manufacturing_stage_2c",
          "microchip_manufacturing_stage_2c_2",
          "microchip_manufacturing_stage_2d",
          "microchip_manufacturing_stage_2d_2",
          "pcb_assembly_t1",
          "pcb_assembly_t2",
          "pcb_assembly_t3",
        ],
        output: [
          "copper_purification_acid",
          "copper_purification_water",
          "copper_storage",
          "copper_storage_2",
          "copper_storage_3",
          "copper_storage_4",
          "copper_storage_5",
        ],
      },
    },
    copper_ore: {
      id: "copper_ore",
      icon: "CopperOre.png",
      name: "Copper Ore",
      machines: {
        input: [
          "blast_furnace",
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "copper_mine",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "copper_ore_crushing",
          "copper_ore_storage",
          "copper_ore_storage_2",
          "copper_ore_storage_3",
          "copper_ore_storage_4",
          "copper_smelting",
        ],
        output: [
          "copper_mining",
          "copper_ore_storage",
          "copper_ore_storage_2",
          "copper_ore_storage_3",
          "copper_ore_storage_4",
        ],
      },
    },
    copper_ore_crushed: {
      id: "copper_ore_crushed",
      icon: "CopperOreCrushed.png",
      name: "Copper Ore Crushed",
      machines: {
        input: [
          "arc_furnace_ii",
          "blast_furnace_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "copper_ore_crushed_storage",
          "copper_ore_crushed_storage_2",
          "copper_ore_crushed_storage_3",
          "copper_ore_crushed_storage_4",
          "copper_smelting_arc",
          "copper_smelting_sand",
        ],
        output: [
          "copper_ore_crushed_storage",
          "copper_ore_crushed_storage_2",
          "copper_ore_crushed_storage_3",
          "copper_ore_crushed_storage_4",
          "copper_ore_crushing",
        ],
      },
    },
    copper_scrap: {
      id: "copper_scrap",
      icon: "CopperScrap.png",
      name: "Copper Scrap",
      machines: {
        input: [
          "arc_furnace_ii",
          "blast_furnace",
          "blast_furnace_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "waste_sorting_plant",
        ],
      },
      recipes: {
        input: [
          "copper_scrap_smelting",
          "copper_scrap_smelting_2",
          "copper_scrap_smelting_arc",
          "copper_scrap_storage",
          "copper_scrap_storage_2",
          "copper_scrap_storage_3",
          "copper_scrap_storage_4",
        ],
        output: [
          "copper_scrap_storage",
          "copper_scrap_storage_2",
          "copper_scrap_storage_3",
          "copper_scrap_storage_4",
          "wastesortingplant",
        ],
      },
    },
    corn: {
      id: "corn",
      icon: "Corn.png",
      name: "Corn",
      machines: {
        input: [
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mill",
          "mixer",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "animal_feed_production_3",
          "corn_milling_wet",
          "corn_storage",
          "corn_storage_2",
          "corn_storage_3",
          "corn_storage_4",
          "snack_production_2",
        ],
        output: [
          "corn_storage",
          "corn_storage_2",
          "corn_storage_3",
          "corn_storage_4",
        ],
      },
    },
    corn_mash: {
      id: "corn_mash",
      icon: "CornMash.png",
      name: "Corn Mash",
      machines: {
        input: [
          "fermentation_tank",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "mill",
        ],
      },
      recipes: {
        input: [
          "corn_mash_storage",
          "corn_mash_storage_2",
          "corn_mash_storage_3",
          "corn_mash_storage_4",
          "ethanol_making_corn",
        ],
        output: [
          "corn_mash_storage",
          "corn_mash_storage_2",
          "corn_mash_storage_3",
          "corn_mash_storage_4",
          "corn_milling_wet",
        ],
      },
    },
    crude_oil: {
      id: "crude_oil",
      icon: "CrudeOil.png",
      name: "Crude Oil",
      machines: {
        input: [
          "basic_distiller",
          "distillation_stage_i",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "oil_pump",
        ],
      },
      recipes: {
        input: [
          "crude_oil_refining",
          "crude_oil_storage",
          "crude_oil_storage_2",
          "crude_oil_storage_3",
          "crude_oil_storage_4",
          "diesel_distillation_basic",
        ],
        output: [
          "crude_oil_storage",
          "crude_oil_storage_2",
          "crude_oil_storage_3",
          "crude_oil_storage_4",
          "oil_pumping",
        ],
      },
    },
    diesel: {
      id: "diesel",
      icon: "Diesel.png",
      name: "Diesel",
      machines: {
        input: [
          "cracking_unit",
          "diesel_generator",
          "flare",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "rubber_maker",
        ],
        output: [
          "basic_distiller",
          "chemical_plant",
          "chemical_plant_ii",
          "cracking_unit",
          "distillation_stage_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "diesel_disposal",
          "diesel_reforming",
          "diesel_storage",
          "diesel_storage_2",
          "diesel_storage_3",
          "diesel_storage_4",
          "dieselgenerator",
          "rubber_production_alt",
          "rubber_production_coal_alt",
        ],
        output: [
          "crude_oil_refining_2",
          "diesel_distillation_basic",
          "diesel_storage",
          "diesel_storage_2",
          "diesel_storage_3",
          "diesel_storage_4",
          "fuel_transesterification",
          "fuel_transesterification_2",
          "fuelgas_reforming",
          "heavyoil_cracking",
          "naphtha_reforming",
        ],
      },
    },
    dirt: {
      id: "dirt",
      icon: "Dirt.png",
      name: "Dirt",
      machines: {
        input: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "dirt_mine",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "dirt_storage",
          "dirt_storage_2",
          "dirt_storage_3",
          "dirt_storage_4",
        ],
        output: [
          "dirt_mining",
          "dirt_storage",
          "dirt_storage_2",
          "dirt_storage_3",
          "dirt_storage_4",
        ],
      },
    },
    disinfectant: {
      id: "disinfectant",
      icon: "Disinfectant.png",
      name: "Disinfectant",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "chemical_plant",
          "chemical_plant_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "disinfectant_storage",
          "disinfectant_storage_2",
          "disinfectant_storage_3",
          "disinfectant_storage_4",
          "disinfectant_storage_5",
          "medical_supplies_assembly_t1",
          "medical_supplies_assembly_t2",
        ],
        output: [
          "disinfectant_production",
          "disinfectant_production_2",
          "disinfectant_storage",
          "disinfectant_storage_2",
          "disinfectant_storage_3",
          "disinfectant_storage_4",
          "disinfectant_storage_5",
        ],
      },
    },
    eggs: {
      id: "eggs",
      icon: "Eggs.png",
      name: "Eggs",
      machines: {
        input: [
          "assembly_electric_ii",
          "baking_unit",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cake_production",
          "eggs_storage",
          "eggs_storage_2",
          "eggs_storage_3",
          "eggs_storage_4",
          "eggs_storage_5",
          "food_pack_assembly_eggs",
        ],
        output: [
          "eggs_storage",
          "eggs_storage_2",
          "eggs_storage_3",
          "eggs_storage_4",
          "eggs_storage_5",
        ],
      },
    },
    electricity: {
      id: "electricity",
      icon: "Electricity.png",
      name: "Electricity",
      machines: {
        input: [],
        output: ["diesel_generator", "power_generator", "power_generator_ii"],
      },
      recipes: {
        input: [],
        output: ["dieselgenerator", "powergeneratort1", "powergeneratort2"],
      },
    },
    electronics: {
      id: "electronics",
      icon: "Electronics.png",
      name: "Electronics",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "assembly_robotic_ii",
          "maintenance_depot",
          "maintenance_depot_basic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cp2_assembly_t1",
          "cp2_assembly_t1_2",
          "cp2_assembly_t2",
          "cp2_assembly_t3",
          "electronics_2_assembly_t1",
          "electronics_2_assembly_t2",
          "electronics_2_assembly_t3",
          "electronics_storage",
          "electronics_storage_2",
          "electronics_storage_3",
          "electronics_storage_4",
          "electronics_storage_5",
          "household_appliances_assembly_t1",
          "household_appliances_assembly_t2",
          "household_appliances_assembly_t3",
          "lab_equipment_assembly_t1",
          "lab_equipment_assembly_t2",
          "lab_equipment_assembly_t3",
          "maintenance_i",
          "maintenance_i_2",
          "maintenance_i_3",
          "maintenance_i_4",
          "maintenance_i_5",
          "maintenance_i_6",
          "vehicle_parts_assembly_t1",
          "vehicle_parts_assembly_t2",
          "vehicle_parts_assembly_t3",
          "vehicle_parts_assembly_t4",
        ],
        output: [
          "electronics_assembly_t1",
          "electronics_assembly_t2",
          "electronics_assembly_t3",
          "electronics_assembly_t4",
          "electronics_assembly_t5",
          "electronics_storage",
          "electronics_storage_2",
          "electronics_storage_3",
          "electronics_storage_4",
          "electronics_storage_5",
        ],
      },
    },
    electronics_ii: {
      id: "electronics_ii",
      icon: "Electronics2.png",
      name: "Electronics II",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "maintenance_ii_depot",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cp4_assembly_t1",
          "cp4_assembly_t2",
          "electronics_3_assembly_t1",
          "electronics_3_assembly_t2",
          "electronics_3_assembly_t3",
          "electronics_ii_storage",
          "electronics_ii_storage_2",
          "electronics_ii_storage_3",
          "electronics_ii_storage_4",
          "electronics_ii_storage_5",
          "household_appliances_assembly_t1",
          "household_appliances_assembly_t2",
          "household_appliances_assembly_t3",
          "lab_equipment_4_assembly_t2",
          "lab_equipment_4_assembly_t3",
          "maintenance_ii",
          "maintenance_ii_2",
          "maintenance_ii_3",
          "maintenance_ii_4",
          "vehicle_parts_3_assembly_t1",
          "vehicle_parts_3_assembly_t2",
        ],
        output: [
          "electronics_2_assembly_t1",
          "electronics_2_assembly_t2",
          "electronics_2_assembly_t3",
          "electronics_ii_storage",
          "electronics_ii_storage_2",
          "electronics_ii_storage_3",
          "electronics_ii_storage_4",
          "electronics_ii_storage_5",
        ],
      },
    },
    electronics_iii: {
      id: "electronics_iii",
      icon: "Electronics3.png",
      name: "Electronics III",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "maintenance_iii_depot",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "consumer_electronics_assembly_t1",
          "electronics_iii_storage",
          "electronics_iii_storage_2",
          "electronics_iii_storage_3",
          "electronics_iii_storage_4",
          "electronics_iii_storage_5",
          "maintenance_iii",
          "maintenance_iii_2",
          "maintenance_iii_3",
          "maintenance_iii_4",
          "server_assembly_t1",
          "server_assembly_t2",
          "server_assembly_t3",
        ],
        output: [
          "electronics_3_assembly_t1",
          "electronics_3_assembly_t2",
          "electronics_3_assembly_t3",
          "electronics_iii_storage",
          "electronics_iii_storage_2",
          "electronics_iii_storage_3",
          "electronics_iii_storage_4",
          "electronics_iii_storage_5",
        ],
      },
    },
    ethanol: {
      id: "ethanol",
      icon: "Ethanol.png",
      name: "Ethanol",
      machines: {
        input: [
          "boiler_gas",
          "chemical_plant",
          "chemical_plant_ii",
          "flare",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "polymerization_plant",
          "rubber_maker",
        ],
        output: [
          "fermentation_tank",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "disinfectant_production",
          "disinfectant_production_2",
          "ethanol_disposal",
          "ethanol_storage",
          "ethanol_storage_2",
          "ethanol_storage_3",
          "ethanol_storage_4",
          "fuel_transesterification",
          "fuel_transesterification_2",
          "plastic_making_2",
          "rubber_production_ethanol",
          "steam_generation_8",
        ],
        output: [
          "ethanol_making_corn",
          "ethanol_making_sugar",
          "ethanol_storage",
          "ethanol_storage_2",
          "ethanol_storage_3",
          "ethanol_storage_4",
        ],
      },
    },
    exhaust: {
      id: "exhaust",
      icon: "Exhaust.png",
      name: "Exhaust",
      machines: {
        input: [
          "exhaust_scrubber",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "smoke_stack",
          "smoke_stack_large",
        ],
        output: [
          "arc_furnace",
          "arc_furnace_ii",
          "basic_distiller",
          "blast_furnace",
          "blast_furnace_ii",
          "boiler_coal",
          "boiler_gas",
          "coal_maker",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "gold_furnace",
          "oxygen_furnace",
          "oxygen_furnace_ii",
          "polymerization_plant",
          "rotary_kiln",
          "rotary_kiln_gas",
        ],
      },
      recipes: {
        input: [
          "exhaust_filtering",
          "exhaust_storage",
          "exhaust_storage_2",
          "exhaust_storage_3",
          "exhaust_storage_4",
          "product_disposal_13",
          "product_disposal_6",
        ],
        output: [
          "cement_production",
          "cement_production_2",
          "cement_production_3",
          "charcoal_making",
          "copper_scrap_smelting",
          "copper_scrap_smelting_2",
          "copper_scrap_smelting_arc",
          "copper_smelting",
          "copper_smelting_arc",
          "copper_smelting_sand",
          "diesel_distillation_basic",
          "exhaust_storage",
          "exhaust_storage_2",
          "exhaust_storage_3",
          "exhaust_storage_4",
          "glass_broken_smelting",
          "glass_broken_smelting_2",
          "glass_smelting",
          "glass_smelting_2",
          "glass_smelting_3",
          "glass_smelting_4",
          "gold_smelting",
          "gold_smelting_2",
          "iron_scrap_smelting",
          "iron_scrap_smelting_2",
          "iron_scrap_smelting_arc",
          "iron_smelting",
          "iron_smelting_arc",
          "iron_smelting_lime",
          "plastic_making",
          "plastic_making_2",
          "silicon_smelting_arc",
          "silicon_smelting_arc_ii",
          "steam_generation",
          "steam_generation_2",
          "steam_generation_3",
          "steam_generation_4",
          "steam_generation_5",
          "steam_generation_6",
          "steam_generation_7",
          "steel_smelting",
          "steel_smelting_2",
          "water_desalination_basic",
        ],
      },
    },
    fertilizer_i: {
      id: "fertilizer_i",
      icon: "Fertilizer1.png",
      name: "Fertilizer I",
      machines: {
        input: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "mixer",
        ],
        output: [
          "chemical_plant",
          "chemical_plant_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "fertilizer_i_storage",
          "fertilizer_i_storage_2",
          "fertilizer_i_storage_3",
          "fertilizer_i_storage_4",
          "fertilizer_ii_synthesis",
        ],
        output: [
          "fertilizer_i_storage",
          "fertilizer_i_storage_2",
          "fertilizer_i_storage_3",
          "fertilizer_i_storage_4",
          "fertilizer_synthesis",
          "fertilizer_synthesis_2",
        ],
      },
    },
    fertilizer_ii: {
      id: "fertilizer_ii",
      icon: "Fertilizer2.png",
      name: "Fertilizer II",
      machines: {
        input: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "mixer",
        ],
      },
      recipes: {
        input: [
          "fertilizer_ii_storage",
          "fertilizer_ii_storage_2",
          "fertilizer_ii_storage_3",
          "fertilizer_ii_storage_4",
        ],
        output: [
          "fertilizer_ii_storage",
          "fertilizer_ii_storage_2",
          "fertilizer_ii_storage_3",
          "fertilizer_ii_storage_4",
          "fertilizer_ii_synthesis",
        ],
      },
    },
    fertilizer_organic: {
      id: "fertilizer_organic",
      icon: "FertilizerOrganic.png",
      name: "Fertilizer (Organic)",
      machines: {
        input: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "mixer",
        ],
      },
      recipes: {
        input: [
          "fertilizer_organic_storage",
          "fertilizer_organic_storage_2",
          "fertilizer_organic_storage_3",
          "fertilizer_organic_storage_4",
        ],
        output: [
          "fertilizer_mixing",
          "fertilizer_organic_storage",
          "fertilizer_organic_storage_2",
          "fertilizer_organic_storage_3",
          "fertilizer_organic_storage_4",
        ],
      },
    },
    filter_media: {
      id: "filter_media",
      icon: "FilterMedia.png",
      name: "Filter Media",
      machines: {
        input: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "wastewater_treatment",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
      },
      recipes: {
        input: [
          "filter_media_storage",
          "filter_media_storage_2",
          "filter_media_storage_3",
          "filter_media_storage_4",
          "toxic_slurry_treatment",
          "water_treatment_advanced",
        ],
        output: [
          "filter_media_mixing",
          "filter_media_storage",
          "filter_media_storage_2",
          "filter_media_storage_3",
          "filter_media_storage_4",
        ],
      },
    },
    flour: {
      id: "flour",
      icon: "Flour.png",
      name: "Flour",
      machines: {
        input: [
          "baking_unit",
          "food_processor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "mill",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "bread_making",
          "cake_production",
          "flour_storage",
          "flour_storage_2",
          "flour_storage_3",
          "flour_storage_4",
          "flour_storage_5",
          "sausage_processing",
        ],
        output: [
          "flour_storage",
          "flour_storage_2",
          "flour_storage_3",
          "flour_storage_4",
          "flour_storage_5",
          "wheat_milling",
        ],
      },
    },
    flowers: {
      id: "flowers",
      icon: "Flowers.png",
      name: "Flowers",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "flowers_storage",
          "flowers_storage_2",
          "flowers_storage_3",
          "flowers_storage_4",
          "flowers_storage_5",
        ],
        output: [
          "flowers_storage",
          "flowers_storage_2",
          "flowers_storage_3",
          "flowers_storage_4",
          "flowers_storage_5",
        ],
      },
    },
    food_pack: {
      id: "food_pack",
      icon: "FoodPack.png",
      name: "Food Pack",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "food_pack_storage",
          "food_pack_storage_2",
          "food_pack_storage_3",
          "food_pack_storage_4",
          "food_pack_storage_5",
        ],
        output: [
          "food_pack_assembly_eggs",
          "food_pack_assembly_meat",
          "food_pack_storage",
          "food_pack_storage_2",
          "food_pack_storage_3",
          "food_pack_storage_4",
          "food_pack_storage_5",
        ],
      },
    },
    fruit: {
      id: "fruit",
      icon: "Fruit.png",
      name: "Fruit",
      machines: {
        input: [
          "baking_unit",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cake_production",
          "fruit_storage",
          "fruit_storage_2",
          "fruit_storage_3",
          "fruit_storage_4",
          "fruit_storage_5",
        ],
        output: [
          "fruit_storage",
          "fruit_storage_2",
          "fruit_storage_3",
          "fruit_storage_4",
          "fruit_storage_5",
        ],
      },
    },
    fuel_gas: {
      id: "fuel_gas",
      icon: "FuelGas.png",
      name: "Fuel Gas",
      machines: {
        input: [
          "boiler_gas",
          "cracking_unit",
          "flare",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "hydrogen_reformer",
          "rotary_kiln_gas",
        ],
        output: [
          "anaerobic_digester",
          "chemical_plant_ii",
          "cracking_unit",
          "distillation_stage_iii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cement_production_2",
          "fuel_gas_disposal",
          "fuel_gas_storage",
          "fuel_gas_storage_2",
          "fuel_gas_storage_3",
          "fuel_gas_storage_4",
          "fuelgas_reforming",
          "hydrogen_reforming",
          "steam_generation_9",
        ],
        output: [
          "digestion",
          "digestion_2",
          "digestion_3",
          "digestion_4",
          "fuel_gas_storage",
          "fuel_gas_storage_2",
          "fuel_gas_storage_3",
          "fuel_gas_storage_4",
          "fuelgas_synthesis",
          "heavy_distillate_refining",
          "heavyoil_cracking",
          "heavyoil_cracking_2",
          "naphtha_reforming",
          "naphtha_reforming_2",
        ],
      },
    },
    glass: {
      id: "glass",
      icon: "Glass.png",
      name: "Glass",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "chemical_plant_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "glass_maker",
          "glass_maker_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "glass_storage",
          "glass_storage_2",
          "glass_storage_3",
          "glass_storage_4",
          "glass_storage_5",
          "household_goods_assembly_t1",
          "household_goods_assembly_t2",
          "household_goods_assembly_t3",
          "lab_equipment_2_assembly_t2",
          "lab_equipment_2_assembly_t3",
          "morphine_production",
          "pcb_assembly_t1",
          "pcb_assembly_t2",
          "pcb_assembly_t3",
          "solar_cell_assembly",
          "solar_cell_assembly_2",
          "solar_cell_assembly_3",
          "solar_cell_assembly_4",
          "vehicle_parts_2_assembly_t1",
          "vehicle_parts_2_assembly_t2",
        ],
        output: [
          "glass_casting",
          "glass_casting_2",
          "glass_storage",
          "glass_storage_2",
          "glass_storage_3",
          "glass_storage_4",
          "glass_storage_5",
        ],
      },
    },
    glass_mix: {
      id: "glass_mix",
      icon: "GlassMix.png",
      name: "Glass Mix",
      machines: {
        input: [
          "arc_furnace_ii",
          "blast_furnace",
          "blast_furnace_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
      },
      recipes: {
        input: [
          "glass_mix_storage",
          "glass_mix_storage_2",
          "glass_mix_storage_3",
          "glass_mix_storage_4",
          "glass_smelting",
          "glass_smelting_2",
          "glass_smelting_3",
        ],
        output: [
          "glass_mix_mixing",
          "glass_mix_mixing_2",
          "glass_mix_storage",
          "glass_mix_storage_2",
          "glass_mix_storage_3",
          "glass_mix_storage_4",
        ],
      },
    },
    gold: {
      id: "gold",
      icon: "Gold.png",
      name: "Gold",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "gold_furnace",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "gold_storage",
          "gold_storage_2",
          "gold_storage_3",
          "gold_storage_4",
          "gold_storage_5",
          "microchip_manufacturing_final_stage",
          "microchip_manufacturing_final_stage_2",
          "microchip_manufacturing_stage_3a",
          "microchip_manufacturing_stage_3a_2",
          "microchip_manufacturing_stage_3b",
          "microchip_manufacturing_stage_3b_2",
          "microchip_manufacturing_stage_3c",
          "microchip_manufacturing_stage_3c_2",
        ],
        output: [
          "gold_smelting",
          "gold_smelting_2",
          "gold_storage",
          "gold_storage_2",
          "gold_storage_3",
          "gold_storage_4",
          "gold_storage_5",
        ],
      },
    },
    gold_ore: {
      id: "gold_ore",
      icon: "GoldOre.png",
      name: "Gold Ore",
      machines: {
        input: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "gold_mine",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "gold_ore_crushing",
          "gold_ore_storage",
          "gold_ore_storage_2",
          "gold_ore_storage_3",
          "gold_ore_storage_4",
        ],
        output: [
          "gold_mining",
          "gold_ore_storage",
          "gold_ore_storage_2",
          "gold_ore_storage_3",
          "gold_ore_storage_4",
        ],
      },
    },
    gold_ore_concentrate: {
      id: "gold_ore_concentrate",
      icon: "GoldOreConcentrate.png",
      name: "Gold Ore Concentrate",
      machines: {
        input: [
          "gold_furnace",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "settling_tank",
        ],
      },
      recipes: {
        input: [
          "gold_ore_concentrate_storage",
          "gold_ore_concentrate_storage_2",
          "gold_ore_concentrate_storage_3",
          "gold_ore_concentrate_storage_4",
          "gold_smelting",
        ],
        output: [
          "gold_ore_concentrate_storage",
          "gold_ore_concentrate_storage_2",
          "gold_ore_concentrate_storage_3",
          "gold_ore_concentrate_storage_4",
          "gold_settling",
        ],
      },
    },
    gold_ore_crushed: {
      id: "gold_ore_crushed",
      icon: "GoldOreCrushed.png",
      name: "Gold Ore Crushed",
      machines: {
        input: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "gold_ore_crushed_storage",
          "gold_ore_crushed_storage_2",
          "gold_ore_crushed_storage_3",
          "gold_ore_crushed_storage_4",
          "gold_ore_milling",
        ],
        output: [
          "gold_ore_crushed_storage",
          "gold_ore_crushed_storage_2",
          "gold_ore_crushed_storage_3",
          "gold_ore_crushed_storage_4",
          "gold_ore_crushing",
        ],
      },
    },
    gold_ore_powder: {
      id: "gold_ore_powder",
      icon: "GoldOrePowder.png",
      name: "Gold Ore Powder",
      machines: {
        input: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "settling_tank",
        ],
        output: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "gold_ore_powder_storage",
          "gold_ore_powder_storage_2",
          "gold_ore_powder_storage_3",
          "gold_ore_powder_storage_4",
          "gold_settling",
        ],
        output: [
          "gold_ore_milling",
          "gold_ore_powder_storage",
          "gold_ore_powder_storage_2",
          "gold_ore_powder_storage_3",
          "gold_ore_powder_storage_4",
        ],
      },
    },
    gold_scrap: {
      id: "gold_scrap",
      icon: "GoldScrap.png",
      name: "Gold Scrap",
      machines: {
        input: [
          "gold_furnace",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "waste_sorting_plant",
        ],
      },
      recipes: {
        input: [
          "gold_scrap_storage",
          "gold_scrap_storage_2",
          "gold_scrap_storage_3",
          "gold_scrap_storage_4",
          "gold_smelting_2",
        ],
        output: [
          "gold_scrap_storage",
          "gold_scrap_storage_2",
          "gold_scrap_storage_3",
          "gold_scrap_storage_4",
          "wastesortingplant",
        ],
      },
    },
    graphite: {
      id: "graphite",
      icon: "Graphite.png",
      name: "Graphite",
      machines: {
        input: [
          "arc_furnace",
          "arc_furnace_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "chemical_plant_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "copper_scrap_smelting_arc",
          "copper_smelting_arc",
          "glass_smelting_3",
          "glass_smelting_4",
          "graphite_storage",
          "graphite_storage_2",
          "graphite_storage_3",
          "graphite_storage_4",
          "graphite_storage_5",
          "iron_scrap_smelting_arc",
          "iron_smelting_arc",
          "silicon_smelting_arc",
          "silicon_smelting_arc_ii",
        ],
        output: [
          "graphite_production",
          "graphite_production_2",
          "graphite_storage",
          "graphite_storage_2",
          "graphite_storage_3",
          "graphite_storage_4",
          "graphite_storage_5",
        ],
      },
    },
    gravel: {
      id: "gravel",
      icon: "Gravel.png",
      name: "Gravel",
      machines: {
        input: [
          "concrete_mixer",
          "concrete_mixer_ii",
          "concrete_mixer_iii",
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
        output: [
          "crusher",
          "gravel_mine",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "concrete_mixing_2",
          "concrete_mixing_4",
          "concrete_mixing_6",
          "concrete_mixing_8",
          "filter_media_mixing",
          "gravel_crushing",
          "gravel_storage",
          "gravel_storage_2",
          "gravel_storage_3",
          "gravel_storage_4",
        ],
        output: [
          "gravel_mining",
          "gravel_storage",
          "gravel_storage_2",
          "gravel_storage_3",
          "gravel_storage_4",
          "rock_crushing",
        ],
      },
    },
    heavy_oil: {
      id: "heavy_oil",
      icon: "HeavyOil.png",
      name: "Heavy Oil",
      machines: {
        input: [
          "boiler_gas",
          "cracking_unit",
          "flare",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "distillation_stage_i",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "heavy_oil_disposal",
          "heavy_oil_storage",
          "heavy_oil_storage_2",
          "heavy_oil_storage_3",
          "heavy_oil_storage_4",
          "heavyoil_cracking",
          "heavyoil_cracking_2",
          "steam_generation_4",
        ],
        output: [
          "crude_oil_refining",
          "heavy_oil_storage",
          "heavy_oil_storage_2",
          "heavy_oil_storage_3",
          "heavy_oil_storage_4",
        ],
      },
    },
    household_appliances: {
      id: "household_appliances",
      icon: "HouseholdAppliances.png",
      name: "Household Appliances",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "household_appliances_storage",
          "household_appliances_storage_2",
          "household_appliances_storage_3",
          "household_appliances_storage_4",
          "household_appliances_storage_5",
        ],
        output: [
          "household_appliances_assembly_t1",
          "household_appliances_assembly_t2",
          "household_appliances_assembly_t3",
          "household_appliances_storage",
          "household_appliances_storage_2",
          "household_appliances_storage_3",
          "household_appliances_storage_4",
          "household_appliances_storage_5",
        ],
      },
    },
    household_goods: {
      id: "household_goods",
      icon: "HouseholdGoods.png",
      name: "Household Goods",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "household_goods_storage",
          "household_goods_storage_2",
          "household_goods_storage_3",
          "household_goods_storage_4",
          "household_goods_storage_5",
        ],
        output: [
          "household_goods_assembly_t1",
          "household_goods_assembly_t2",
          "household_goods_assembly_t3",
          "household_goods_storage",
          "household_goods_storage_2",
          "household_goods_storage_3",
          "household_goods_storage_4",
          "household_goods_storage_5",
        ],
      },
    },
    hydrogen: {
      id: "hydrogen",
      icon: "Hydrogen.png",
      name: "Hydrogen",
      machines: {
        input: [
          "boiler_gas",
          "chemical_plant",
          "chemical_plant_ii",
          "cracking_unit",
          "flare",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "rotary_kiln_gas",
          "silicon_reactor",
        ],
        output: [
          "electrolyzer",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "hydrogen_reformer",
        ],
      },
      recipes: {
        input: [
          "ammonia_synthesis",
          "ammonia_synthesis_2",
          "cement_production_3",
          "fuelgas_synthesis",
          "heavyoil_cracking",
          "heavyoil_cracking_2",
          "hydrogen_disposal",
          "hydrogen_storage",
          "hydrogen_storage_2",
          "hydrogen_storage_3",
          "hydrogen_storage_4",
          "naphtha_reforming",
          "silicon_treatment",
          "steam_generation_10",
        ],
        output: [
          "ammonia_electrolysis",
          "hydrogen_reforming",
          "hydrogen_storage",
          "hydrogen_storage_2",
          "hydrogen_storage_3",
          "hydrogen_storage_4",
          "water_electrolysis",
        ],
      },
    },
    hydrogen_fluoride: {
      id: "hydrogen_fluoride",
      icon: "HydrogenFluoride.png",
      name: "Hydrogen Fluoride",
      machines: {
        input: [
          "chemical_plant_ii",
          "enrichment_plant",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "settling_tank",
        ],
      },
      recipes: {
        input: [
          "anesthetics_production",
          "hydrogen_fluoride_storage",
          "hydrogen_fluoride_storage_2",
          "hydrogen_fluoride_storage_3",
          "hydrogen_fluoride_storage_4",
          "uranium_enrichment",
        ],
        output: [
          "fluoride_leaching",
          "hydrogen_fluoride_storage",
          "hydrogen_fluoride_storage_2",
          "hydrogen_fluoride_storage_3",
          "hydrogen_fluoride_storage_4",
        ],
      },
    },
    impure_copper: {
      id: "impure_copper",
      icon: "ImpureCopper.png",
      name: "Impure Copper",
      machines: {
        input: [
          "copper_electrolysis",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "metal_caster",
          "metal_caster_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "copper_purification_acid",
          "copper_purification_water",
          "impure_copper_storage",
          "impure_copper_storage_2",
          "impure_copper_storage_3",
          "impure_copper_storage_4",
          "impure_copper_storage_5",
        ],
        output: [
          "copper_casting",
          "copper_casting_2",
          "impure_copper_storage",
          "impure_copper_storage_2",
          "impure_copper_storage_3",
          "impure_copper_storage_4",
          "impure_copper_storage_5",
        ],
      },
    },
    iron: {
      id: "iron",
      icon: "Iron.png",
      name: "Iron",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "metal_caster",
          "metal_caster_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cp_assembly_t1",
          "cp_assembly_t2",
          "cp_assembly_t3",
          "cp_assembly_t3_2",
          "iron_storage",
          "iron_storage_2",
          "iron_storage_3",
          "iron_storage_4",
          "iron_storage_5",
          "mech._parts_assembly_t1",
          "mech._parts_assembly_t2",
          "mech._parts_assembly_t3-1",
          "vehicle_parts_assembly_t1",
          "vehicle_parts_assembly_t2",
          "vehicle_parts_assembly_t3",
          "vehicle_parts_assembly_t4",
        ],
        output: [
          "iron_casting",
          "iron_casting_2",
          "iron_storage",
          "iron_storage_2",
          "iron_storage_3",
          "iron_storage_4",
          "iron_storage_5",
        ],
      },
    },
    iron_ore: {
      id: "iron_ore",
      icon: "IronOre.png",
      name: "Iron Ore",
      machines: {
        input: [
          "blast_furnace",
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "iron_mine",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "iron_ore_crushing",
          "iron_ore_storage",
          "iron_ore_storage_2",
          "iron_ore_storage_3",
          "iron_ore_storage_4",
          "iron_smelting",
        ],
        output: [
          "iron_mining",
          "iron_ore_storage",
          "iron_ore_storage_2",
          "iron_ore_storage_3",
          "iron_ore_storage_4",
        ],
      },
    },
    iron_ore_crushed: {
      id: "iron_ore_crushed",
      icon: "IronOreCrushed.png",
      name: "Iron Ore Crushed",
      machines: {
        input: [
          "arc_furnace_ii",
          "blast_furnace_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "iron_ore_crushed_storage",
          "iron_ore_crushed_storage_2",
          "iron_ore_crushed_storage_3",
          "iron_ore_crushed_storage_4",
          "iron_smelting_arc",
          "iron_smelting_lime",
        ],
        output: [
          "iron_ore_crushed_storage",
          "iron_ore_crushed_storage_2",
          "iron_ore_crushed_storage_3",
          "iron_ore_crushed_storage_4",
          "iron_ore_crushing",
        ],
      },
    },
    iron_scrap: {
      id: "iron_scrap",
      icon: "IronScrap.png",
      name: "Iron Scrap",
      machines: {
        input: [
          "arc_furnace_ii",
          "blast_furnace",
          "blast_furnace_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "waste_sorting_plant",
        ],
      },
      recipes: {
        input: [
          "iron_scrap_smelting",
          "iron_scrap_smelting_2",
          "iron_scrap_smelting_arc",
          "iron_scrap_storage",
          "iron_scrap_storage_2",
          "iron_scrap_storage_3",
          "iron_scrap_storage_4",
        ],
        output: [
          "iron_scrap_storage",
          "iron_scrap_storage_2",
          "iron_scrap_storage_3",
          "iron_scrap_storage_4",
          "wastesortingplant",
        ],
      },
    },
    lab_equipment: {
      id: "lab_equipment",
      icon: "LabEquipment.png",
      name: "Lab Equipment",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "research_lab_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "lab_equipment_assembly_t1_2",
          "lab_equipment_assembly_t2_2",
          "lab_equipment_storage",
          "lab_equipment_storage_2",
          "lab_equipment_storage_3",
          "lab_equipment_storage_4",
          "lab_equipment_storage_5",
          "research_lab_ii",
        ],
        output: [
          "lab_equipment_assembly_t1",
          "lab_equipment_assembly_t2",
          "lab_equipment_assembly_t3",
          "lab_equipment_storage",
          "lab_equipment_storage_2",
          "lab_equipment_storage_3",
          "lab_equipment_storage_4",
          "lab_equipment_storage_5",
        ],
      },
    },
    lab_equipment_ii: {
      id: "lab_equipment_ii",
      icon: "LabEquipment2.png",
      name: "Lab Equipment II",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "research_lab_iii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "lab_equipment_2_assembly_t2",
          "lab_equipment_2_assembly_t3",
          "lab_equipment_ii_storage",
          "lab_equipment_ii_storage_2",
          "lab_equipment_ii_storage_3",
          "lab_equipment_ii_storage_4",
          "lab_equipment_ii_storage_5",
          "research_lab_iii",
        ],
        output: [
          "lab_equipment_assembly_t1_2",
          "lab_equipment_assembly_t2_2",
          "lab_equipment_ii_storage",
          "lab_equipment_ii_storage_2",
          "lab_equipment_ii_storage_3",
          "lab_equipment_ii_storage_4",
          "lab_equipment_ii_storage_5",
        ],
      },
    },
    lab_equipment_iii: {
      id: "lab_equipment_iii",
      icon: "LabEquipment3.png",
      name: "Lab Equipment III",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "research_lab_iv",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "lab_equipment_4_assembly_t2",
          "lab_equipment_4_assembly_t3",
          "lab_equipment_iii_storage",
          "lab_equipment_iii_storage_2",
          "lab_equipment_iii_storage_3",
          "lab_equipment_iii_storage_4",
          "lab_equipment_iii_storage_5",
          "research_lab_iv",
        ],
        output: [
          "lab_equipment_2_assembly_t2",
          "lab_equipment_2_assembly_t3",
          "lab_equipment_iii_storage",
          "lab_equipment_iii_storage_2",
          "lab_equipment_iii_storage_3",
          "lab_equipment_iii_storage_4",
          "lab_equipment_iii_storage_5",
        ],
      },
    },
    lab_equipment_iv: {
      id: "lab_equipment_iv",
      icon: "LabEquipment4.png",
      name: "Lab Equipment IV",
      machines: {
        input: [
          "research_lab_v",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "lab_equipment_iv_storage",
          "lab_equipment_iv_storage_2",
          "lab_equipment_iv_storage_3",
          "lab_equipment_iv_storage_4",
          "lab_equipment_iv_storage_5",
          "research_lab_v",
        ],
        output: [
          "lab_equipment_4_assembly_t2",
          "lab_equipment_4_assembly_t3",
          "lab_equipment_iv_storage",
          "lab_equipment_iv_storage_2",
          "lab_equipment_iv_storage_3",
          "lab_equipment_iv_storage_4",
          "lab_equipment_iv_storage_5",
        ],
      },
    },
    light_oil: {
      id: "light_oil",
      icon: "LightOil.png",
      name: "Light Oil",
      machines: {
        input: [
          "boiler_gas",
          "distillation_stage_iii",
          "flare",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "distillation_stage_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "heavy_distillate_refining",
          "light_oil_disposal",
          "light_oil_storage",
          "light_oil_storage_2",
          "light_oil_storage_3",
          "light_oil_storage_4",
          "steam_generation_6",
        ],
        output: [
          "crude_oil_refining_2",
          "light_oil_storage",
          "light_oil_storage_2",
          "light_oil_storage_3",
          "light_oil_storage_4",
        ],
      },
    },
    limestone: {
      id: "limestone",
      icon: "Limestone.png",
      name: "Limestone",
      machines: {
        input: [
          "arc_furnace_ii",
          "blast_furnace_ii",
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
          "rotary_kiln",
          "rotary_kiln_gas",
        ],
        output: [
          "limestone_mine",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "cement_production",
          "cement_production_2",
          "cement_production_3",
          "fertilizer_ii_synthesis",
          "glass_mix_mixing",
          "glass_mix_mixing_2",
          "iron_smelting_arc",
          "iron_smelting_lime",
          "limestone_storage",
          "limestone_storage_2",
          "limestone_storage_3",
          "limestone_storage_4",
          "sulfur_neutralization",
          "tofu_making",
        ],
        output: [
          "limestone_mining",
          "limestone_storage",
          "limestone_storage_2",
          "limestone_storage_3",
          "limestone_storage_4",
        ],
      },
    },
    liquid_nitrogen: {
      id: "liquid_nitrogen",
      icon: "LiquidNitrogen.png",
      name: "Liquid Nitrogen",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "chemical_plant",
          "chemical_plant_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "lab_equipment_assembly_t1_2",
          "lab_equipment_assembly_t2_2",
          "liquid_nitrogen_storage",
          "liquid_nitrogen_storage_2",
          "liquid_nitrogen_storage_3",
          "liquid_nitrogen_storage_4",
          "liquid_nitrogen_storage_5",
        ],
        output: [
          "liquid_nitrogen_production",
          "liquid_nitrogen_production_2",
          "liquid_nitrogen_storage",
          "liquid_nitrogen_storage_2",
          "liquid_nitrogen_storage_3",
          "liquid_nitrogen_storage_4",
          "liquid_nitrogen_storage_5",
        ],
      },
    },
    maintenance_i: {
      id: "maintenance_i",
      icon: "Maintenance1.png",
      name: "Maintenance I",
      machines: {
        input: [],
        output: ["maintenance_depot", "maintenance_depot_basic"],
      },
      recipes: {
        input: [],
        output: [
          "maintenance_i",
          "maintenance_i_2",
          "maintenance_i_3",
          "maintenance_i_4",
          "maintenance_i_5",
          "maintenance_i_6",
        ],
      },
    },
    maintenance_ii: {
      id: "maintenance_ii",
      icon: "Maintenance2.png",
      name: "Maintenance II",
      machines: {
        input: [],
        output: ["maintenance_ii_depot"],
      },
      recipes: {
        input: [],
        output: [
          "maintenance_ii",
          "maintenance_ii_2",
          "maintenance_ii_3",
          "maintenance_ii_4",
        ],
      },
    },
    maintenance_iii: {
      id: "maintenance_iii",
      icon: "Maintenance3.png",
      name: "Maintenance III",
      machines: {
        input: [],
        output: ["maintenance_iii_depot"],
      },
      recipes: {
        input: [],
        output: [
          "maintenance_iii",
          "maintenance_iii_2",
          "maintenance_iii_3",
          "maintenance_iii_4",
        ],
      },
    },
    meat: {
      id: "meat",
      icon: "Meat.png",
      name: "Meat",
      machines: {
        input: [
          "assembly_electric_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "food_processor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "food_pack_assembly_meat",
          "meat_storage",
          "meat_storage_2",
          "meat_storage_3",
          "meat_storage_4",
          "meat_storage_5",
        ],
        output: [
          "meat_processing",
          "meat_storage",
          "meat_storage_2",
          "meat_storage_3",
          "meat_storage_4",
          "meat_storage_5",
        ],
      },
    },
    meat_trimmings: {
      id: "meat_trimmings",
      icon: "MeatTrimmings.png",
      name: "Meat Trimmings",
      machines: {
        input: [
          "anaerobic_digester",
          "burner_solid",
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
        output: [
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "burning_4",
          "composing_3",
          "digestion_4",
          "meat_trimmings_storage",
          "meat_trimmings_storage_2",
          "meat_trimmings_storage_3",
          "meat_trimmings_storage_4",
          "sausage_processing",
        ],
        output: [
          "meat_processing",
          "meat_trimmings_storage",
          "meat_trimmings_storage_2",
          "meat_trimmings_storage_3",
          "meat_trimmings_storage_4",
        ],
      },
    },
    mechanical_parts: {
      id: "mechanical_parts",
      icon: "MechanicalParts.png",
      name: "Mechanical Parts",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "maintenance_depot",
          "maintenance_depot_basic",
          "maintenance_ii_depot",
          "maintenance_iii_depot",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "lab_equipment_assembly_t1",
          "lab_equipment_assembly_t2",
          "lab_equipment_assembly_t3",
          "maintenance_i",
          "maintenance_i_2",
          "maintenance_i_3",
          "maintenance_i_4",
          "maintenance_i_5",
          "maintenance_i_6",
          "maintenance_ii",
          "maintenance_ii_2",
          "maintenance_ii_3",
          "maintenance_ii_4",
          "maintenance_iii",
          "maintenance_iii_2",
          "maintenance_iii_3",
          "maintenance_iii_4",
          "mechanical_parts_storage",
          "mechanical_parts_storage_2",
          "mechanical_parts_storage_3",
          "mechanical_parts_storage_4",
          "mechanical_parts_storage_5",
          "vehicle_parts_assembly_t1",
          "vehicle_parts_assembly_t2",
          "vehicle_parts_assembly_t3",
          "vehicle_parts_assembly_t4",
        ],
        output: [
          "mech._parts_assembly_t1",
          "mech._parts_assembly_t2",
          "mech._parts_assembly_t3-1",
          "mech._parts_assembly_t3-2",
          "mech._parts_assembly_t4",
          "mechanical_parts_storage",
          "mechanical_parts_storage_2",
          "mechanical_parts_storage_3",
          "mechanical_parts_storage_4",
          "mechanical_parts_storage_5",
        ],
      },
    },
    mechanical_power: {
      id: "mechanical_power",
      icon: "MechanicalPower.png",
      name: "Mechanical Power",
      machines: {
        input: ["power_generator", "power_generator_ii"],
        output: [
          "high-pressure_turbine",
          "high-pressure_turbine_ii",
          "low-pressure_turbine",
          "low-pressure_turbine_ii",
        ],
      },
      recipes: {
        input: ["powergeneratort1", "powergeneratort2"],
        output: [
          "turbinehighpress",
          "turbinehighpresst2",
          "turbinelowpress",
          "turbinelowpresst2",
        ],
      },
    },
    medical_equipment: {
      id: "medical_equipment",
      icon: "MedicalEquipment.png",
      name: "Medical Equipment",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "medical_equipment_storage",
          "medical_equipment_storage_2",
          "medical_equipment_storage_3",
          "medical_equipment_storage_4",
          "medical_equipment_storage_5",
          "medical_supplies_assembly_t1",
          "medical_supplies_assembly_t2",
        ],
        output: [
          "medical_equipment_assembly_t1",
          "medical_equipment_assembly_t2",
          "medical_equipment_storage",
          "medical_equipment_storage_2",
          "medical_equipment_storage_3",
          "medical_equipment_storage_4",
          "medical_equipment_storage_5",
        ],
      },
    },
    medical_supplies: {
      id: "medical_supplies",
      icon: "MedicalSupplies.png",
      name: "Medical Supplies",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "medical_supplies_assembly_t1_2",
          "medical_supplies_assembly_t2_2",
          "medical_supplies_storage",
          "medical_supplies_storage_2",
          "medical_supplies_storage_3",
          "medical_supplies_storage_4",
          "medical_supplies_storage_5",
        ],
        output: [
          "medical_supplies_assembly_t1",
          "medical_supplies_assembly_t2",
          "medical_supplies_storage",
          "medical_supplies_storage_2",
          "medical_supplies_storage_3",
          "medical_supplies_storage_4",
          "medical_supplies_storage_5",
        ],
      },
    },
    medical_supplies_ii: {
      id: "medical_supplies_ii",
      icon: "MedicalSupplies2.png",
      name: "Medical Supplies II",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "medical_supplies_ii_storage",
          "medical_supplies_ii_storage_2",
          "medical_supplies_ii_storage_3",
          "medical_supplies_ii_storage_4",
          "medical_supplies_ii_storage_5",
          "medical_supplies_iii_assembly_t1",
          "medical_supplies_iii_assembly_t2",
        ],
        output: [
          "medical_supplies_assembly_t1_2",
          "medical_supplies_assembly_t2_2",
          "medical_supplies_ii_storage",
          "medical_supplies_ii_storage_2",
          "medical_supplies_ii_storage_3",
          "medical_supplies_ii_storage_4",
          "medical_supplies_ii_storage_5",
        ],
      },
    },
    medical_supplies_iii: {
      id: "medical_supplies_iii",
      icon: "MedicalSupplies3.png",
      name: "Medical Supplies III",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "medical_supplies_iii_storage",
          "medical_supplies_iii_storage_2",
          "medical_supplies_iii_storage_3",
          "medical_supplies_iii_storage_4",
          "medical_supplies_iii_storage_5",
        ],
        output: [
          "medical_supplies_iii_assembly_t1",
          "medical_supplies_iii_assembly_t2",
          "medical_supplies_iii_storage",
          "medical_supplies_iii_storage_2",
          "medical_supplies_iii_storage_3",
          "medical_supplies_iii_storage_4",
          "medical_supplies_iii_storage_5",
        ],
      },
    },
    medium_oil: {
      id: "medium_oil",
      icon: "MediumOil.png",
      name: "Medium Oil",
      machines: {
        input: [
          "boiler_gas",
          "distillation_stage_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
        output: [
          "distillation_stage_i",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "crude_oil_refining_2",
          "medium_oil_storage",
          "medium_oil_storage_2",
          "medium_oil_storage_3",
          "medium_oil_storage_4",
          "steam_generation_5",
        ],
        output: [
          "crude_oil_refining",
          "medium_oil_storage",
          "medium_oil_storage_2",
          "medium_oil_storage_3",
          "medium_oil_storage_4",
        ],
      },
    },
    microchips: {
      id: "microchips",
      icon: "Microchips.png",
      name: "Microchips",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "electronics_3_assembly_t1",
          "electronics_3_assembly_t2",
          "electronics_3_assembly_t3",
          "microchips_storage",
          "microchips_storage_2",
          "microchips_storage_3",
          "microchips_storage_4",
          "microchips_storage_5",
        ],
        output: [
          "microchip_manufacturing_final_stage",
          "microchip_manufacturing_final_stage_2",
          "microchips_storage",
          "microchips_storage_2",
          "microchips_storage_3",
          "microchips_storage_4",
          "microchips_storage_5",
        ],
      },
    },
    microchips_stage_1_a: {
      id: "microchips_stage_1_a",
      icon: "MicrochipsStage1A.png",
      name: "Microchips Stage 1 A",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_2a",
          "microchip_manufacturing_stage_2a_2",
          "microchips_stage_1_a_storage",
          "microchips_stage_1_a_storage_2",
          "microchips_stage_1_a_storage_3",
          "microchips_stage_1_a_storage_4",
          "microchips_stage_1_a_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_1a",
          "microchip_manufacturing_stage_1a_2",
          "microchips_stage_1_a_storage",
          "microchips_stage_1_a_storage_2",
          "microchips_stage_1_a_storage_3",
          "microchips_stage_1_a_storage_4",
          "microchips_stage_1_a_storage_5",
        ],
      },
    },
    microchips_stage_1_b: {
      id: "microchips_stage_1_b",
      icon: "MicrochipsStage1B.png",
      name: "Microchips Stage 1 B",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_3a",
          "microchip_manufacturing_stage_3a_2",
          "microchips_stage_1_b_storage",
          "microchips_stage_1_b_storage_2",
          "microchips_stage_1_b_storage_3",
          "microchips_stage_1_b_storage_4",
          "microchips_stage_1_b_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_2a",
          "microchip_manufacturing_stage_2a_2",
          "microchips_stage_1_b_storage",
          "microchips_stage_1_b_storage_2",
          "microchips_stage_1_b_storage_3",
          "microchips_stage_1_b_storage_4",
          "microchips_stage_1_b_storage_5",
        ],
      },
    },
    microchips_stage_1_c: {
      id: "microchips_stage_1_c",
      icon: "MicrochipsStage1C.png",
      name: "Microchips Stage 1 C",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_1b",
          "microchip_manufacturing_stage_1b_2",
          "microchips_stage_1_c_storage",
          "microchips_stage_1_c_storage_2",
          "microchips_stage_1_c_storage_3",
          "microchips_stage_1_c_storage_4",
          "microchips_stage_1_c_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_3a",
          "microchip_manufacturing_stage_3a_2",
          "microchips_stage_1_c_storage",
          "microchips_stage_1_c_storage_2",
          "microchips_stage_1_c_storage_3",
          "microchips_stage_1_c_storage_4",
          "microchips_stage_1_c_storage_5",
        ],
      },
    },
    microchips_stage_2_a: {
      id: "microchips_stage_2_a",
      icon: "MicrochipsStage2A.png",
      name: "Microchips Stage 2 A",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_2b",
          "microchip_manufacturing_stage_2b_2",
          "microchips_stage_2_a_storage",
          "microchips_stage_2_a_storage_2",
          "microchips_stage_2_a_storage_3",
          "microchips_stage_2_a_storage_4",
          "microchips_stage_2_a_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_1b",
          "microchip_manufacturing_stage_1b_2",
          "microchips_stage_2_a_storage",
          "microchips_stage_2_a_storage_2",
          "microchips_stage_2_a_storage_3",
          "microchips_stage_2_a_storage_4",
          "microchips_stage_2_a_storage_5",
        ],
      },
    },
    microchips_stage_2_b: {
      id: "microchips_stage_2_b",
      icon: "MicrochipsStage2B.png",
      name: "Microchips Stage 2 B",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_3b",
          "microchip_manufacturing_stage_3b_2",
          "microchips_stage_2_b_storage",
          "microchips_stage_2_b_storage_2",
          "microchips_stage_2_b_storage_3",
          "microchips_stage_2_b_storage_4",
          "microchips_stage_2_b_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_2b",
          "microchip_manufacturing_stage_2b_2",
          "microchips_stage_2_b_storage",
          "microchips_stage_2_b_storage_2",
          "microchips_stage_2_b_storage_3",
          "microchips_stage_2_b_storage_4",
          "microchips_stage_2_b_storage_5",
        ],
      },
    },
    microchips_stage_2_c: {
      id: "microchips_stage_2_c",
      icon: "MicrochipsStage2C.png",
      name: "Microchips Stage 2 C",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_1c",
          "microchip_manufacturing_stage_1c_2",
          "microchips_stage_2_c_storage",
          "microchips_stage_2_c_storage_2",
          "microchips_stage_2_c_storage_3",
          "microchips_stage_2_c_storage_4",
          "microchips_stage_2_c_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_3b",
          "microchip_manufacturing_stage_3b_2",
          "microchips_stage_2_c_storage",
          "microchips_stage_2_c_storage_2",
          "microchips_stage_2_c_storage_3",
          "microchips_stage_2_c_storage_4",
          "microchips_stage_2_c_storage_5",
        ],
      },
    },
    microchips_stage_3_a: {
      id: "microchips_stage_3_a",
      icon: "MicrochipsStage3A.png",
      name: "Microchips Stage 3 A",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_2c",
          "microchip_manufacturing_stage_2c_2",
          "microchips_stage_3_a_storage",
          "microchips_stage_3_a_storage_2",
          "microchips_stage_3_a_storage_3",
          "microchips_stage_3_a_storage_4",
          "microchips_stage_3_a_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_1c",
          "microchip_manufacturing_stage_1c_2",
          "microchips_stage_3_a_storage",
          "microchips_stage_3_a_storage_2",
          "microchips_stage_3_a_storage_3",
          "microchips_stage_3_a_storage_4",
          "microchips_stage_3_a_storage_5",
        ],
      },
    },
    microchips_stage_3_b: {
      id: "microchips_stage_3_b",
      icon: "MicrochipsStage3B.png",
      name: "Microchips Stage 3 B",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_3c",
          "microchip_manufacturing_stage_3c_2",
          "microchips_stage_3_b_storage",
          "microchips_stage_3_b_storage_2",
          "microchips_stage_3_b_storage_3",
          "microchips_stage_3_b_storage_4",
          "microchips_stage_3_b_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_2c",
          "microchip_manufacturing_stage_2c_2",
          "microchips_stage_3_b_storage",
          "microchips_stage_3_b_storage_2",
          "microchips_stage_3_b_storage_3",
          "microchips_stage_3_b_storage_4",
          "microchips_stage_3_b_storage_5",
        ],
      },
    },
    microchips_stage_3_c: {
      id: "microchips_stage_3_c",
      icon: "MicrochipsStage3C.png",
      name: "Microchips Stage 3 C",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_1d",
          "microchip_manufacturing_stage_1d_2",
          "microchips_stage_3_c_storage",
          "microchips_stage_3_c_storage_2",
          "microchips_stage_3_c_storage_3",
          "microchips_stage_3_c_storage_4",
          "microchips_stage_3_c_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_3c",
          "microchip_manufacturing_stage_3c_2",
          "microchips_stage_3_c_storage",
          "microchips_stage_3_c_storage_2",
          "microchips_stage_3_c_storage_3",
          "microchips_stage_3_c_storage_4",
          "microchips_stage_3_c_storage_5",
        ],
      },
    },
    microchips_stage_4_a: {
      id: "microchips_stage_4_a",
      icon: "MicrochipsStage4A.png",
      name: "Microchips Stage 4 A",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_2d",
          "microchip_manufacturing_stage_2d_2",
          "microchips_stage_4_a_storage",
          "microchips_stage_4_a_storage_2",
          "microchips_stage_4_a_storage_3",
          "microchips_stage_4_a_storage_4",
          "microchips_stage_4_a_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_1d",
          "microchip_manufacturing_stage_1d_2",
          "microchips_stage_4_a_storage",
          "microchips_stage_4_a_storage_2",
          "microchips_stage_4_a_storage_3",
          "microchips_stage_4_a_storage_4",
          "microchips_stage_4_a_storage_5",
        ],
      },
    },
    microchips_stage_4_b: {
      id: "microchips_stage_4_b",
      icon: "MicrochipsStage4B.png",
      name: "Microchips Stage 4 B",
      machines: {
        input: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_final_stage",
          "microchip_manufacturing_final_stage_2",
          "microchips_stage_4_b_storage",
          "microchips_stage_4_b_storage_2",
          "microchips_stage_4_b_storage_3",
          "microchips_stage_4_b_storage_4",
          "microchips_stage_4_b_storage_5",
        ],
        output: [
          "microchip_manufacturing_stage_2d",
          "microchip_manufacturing_stage_2d_2",
          "microchips_stage_4_b_storage",
          "microchips_stage_4_b_storage_2",
          "microchips_stage_4_b_storage_3",
          "microchips_stage_4_b_storage_4",
          "microchips_stage_4_b_storage_5",
        ],
      },
    },
    molten_copper: {
      id: "molten_copper",
      icon: "MoltenCopper.png",
      name: "Molten Copper",
      machines: {
        input: ["metal_caster", "metal_caster_ii"],
        output: ["arc_furnace_ii", "blast_furnace", "blast_furnace_ii"],
      },
      recipes: {
        input: ["copper_casting", "copper_casting_2"],
        output: [
          "copper_scrap_smelting",
          "copper_scrap_smelting_2",
          "copper_scrap_smelting_arc",
          "copper_smelting",
          "copper_smelting_arc",
          "copper_smelting_sand",
        ],
      },
    },
    molten_glass: {
      id: "molten_glass",
      icon: "MoltenGlass.png",
      name: "Molten Glass",
      machines: {
        input: ["glass_maker", "glass_maker_ii"],
        output: ["arc_furnace_ii", "blast_furnace", "blast_furnace_ii"],
      },
      recipes: {
        input: ["glass_casting", "glass_casting_2"],
        output: [
          "glass_broken_smelting",
          "glass_broken_smelting_2",
          "glass_smelting",
          "glass_smelting_2",
          "glass_smelting_3",
          "glass_smelting_4",
        ],
      },
    },
    molten_iron: {
      id: "molten_iron",
      icon: "MoltenIron.png",
      name: "Molten Iron",
      machines: {
        input: [
          "metal_caster",
          "metal_caster_ii",
          "oxygen_furnace",
          "oxygen_furnace_ii",
        ],
        output: ["arc_furnace_ii", "blast_furnace", "blast_furnace_ii"],
      },
      recipes: {
        input: [
          "iron_casting",
          "iron_casting_2",
          "steel_smelting",
          "steel_smelting_2",
        ],
        output: [
          "iron_scrap_smelting",
          "iron_scrap_smelting_2",
          "iron_scrap_smelting_arc",
          "iron_smelting",
          "iron_smelting_arc",
          "iron_smelting_lime",
        ],
      },
    },
    molten_silicon: {
      id: "molten_silicon",
      icon: "MoltenSilicon.png",
      name: "Molten Silicon",
      machines: {
        input: ["silicon_reactor"],
        output: ["arc_furnace", "arc_furnace_ii"],
      },
      recipes: {
        input: ["silicon_treatment"],
        output: ["silicon_smelting_arc", "silicon_smelting_arc_ii"],
      },
    },
    molten_steel: {
      id: "molten_steel",
      icon: "MoltenSteel.png",
      name: "Molten Steel",
      machines: {
        input: ["cooled_caster", "cooled_caster_ii"],
        output: ["oxygen_furnace", "oxygen_furnace_ii"],
      },
      recipes: {
        input: ["steel_casting_cooled", "steel_casting_cooled_2"],
        output: ["steel_smelting", "steel_smelting_2"],
      },
    },
    morphine: {
      id: "morphine",
      icon: "Morphine.png",
      name: "Morphine",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "chemical_plant_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "medical_supplies_iii_assembly_t1",
          "medical_supplies_iii_assembly_t2",
          "morphine_storage",
          "morphine_storage_2",
          "morphine_storage_3",
          "morphine_storage_4",
          "morphine_storage_5",
        ],
        output: [
          "morphine_production",
          "morphine_storage",
          "morphine_storage_2",
          "morphine_storage_3",
          "morphine_storage_4",
          "morphine_storage_5",
        ],
      },
    },
    naphtha: {
      id: "naphtha",
      icon: "Naphtha.png",
      name: "Naphtha",
      machines: {
        input: [
          "boiler_gas",
          "cracking_unit",
          "flare",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "polymerization_plant",
          "rubber_maker",
        ],
        output: [
          "cracking_unit",
          "distillation_stage_iii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "naphtha_disposal",
          "naphtha_reforming",
          "naphtha_reforming_2",
          "naphtha_storage",
          "naphtha_storage_2",
          "naphtha_storage_3",
          "naphtha_storage_4",
          "plastic_making",
          "rubber_production",
          "rubber_production_coal",
          "steam_generation_7",
        ],
        output: [
          "diesel_reforming",
          "heavy_distillate_refining",
          "heavyoil_cracking_2",
          "naphtha_storage",
          "naphtha_storage_2",
          "naphtha_storage_3",
          "naphtha_storage_4",
        ],
      },
    },
    nitrogen: {
      id: "nitrogen",
      icon: "Nitrogen.png",
      name: "Nitrogen",
      machines: {
        input: [
          "chemical_plant",
          "chemical_plant_ii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "smoke_stack",
          "smoke_stack_large",
        ],
        output: [
          "air_separator",
          "electrolyzer",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "ammonia_synthesis",
          "ammonia_synthesis_2",
          "fertilizer_synthesis",
          "fertilizer_synthesis_2",
          "liquid_nitrogen_production",
          "liquid_nitrogen_production_2",
          "nitrogen_storage",
          "nitrogen_storage_2",
          "nitrogen_storage_3",
          "nitrogen_storage_4",
          "product_disposal_12",
          "product_disposal_5",
        ],
        output: [
          "air_separation",
          "ammonia_electrolysis",
          "nitrogen_storage",
          "nitrogen_storage_2",
          "nitrogen_storage_3",
          "nitrogen_storage_4",
        ],
      },
    },
    oxygen: {
      id: "oxygen",
      icon: "Oxygen.png",
      name: "Oxygen",
      machines: {
        input: [
          "cracking_unit",
          "fermentation_tank",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "oxygen_furnace",
          "oxygen_furnace_ii",
          "smoke_stack",
          "smoke_stack_large",
        ],
        output: [
          "air_separator",
          "electrolyzer",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "antibiotics",
          "ethanol_making_corn",
          "ethanol_making_sugar",
          "fuelgas_reforming",
          "oxygen_storage",
          "oxygen_storage_2",
          "oxygen_storage_3",
          "oxygen_storage_4",
          "product_disposal_11",
          "product_disposal_4",
          "steel_smelting",
          "steel_smelting_2",
        ],
        output: [
          "air_separation",
          "oxygen_storage",
          "oxygen_storage_2",
          "oxygen_storage_3",
          "oxygen_storage_4",
          "water_electrolysis",
        ],
      },
    },
    pcb: {
      id: "pcb",
      icon: "PCB.png",
      name: "PCB",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "electronics_2_assembly_t1",
          "electronics_2_assembly_t2",
          "electronics_2_assembly_t3",
          "pcb_storage",
          "pcb_storage_2",
          "pcb_storage_3",
          "pcb_storage_4",
          "pcb_storage_5",
        ],
        output: [
          "pcb_assembly_t1",
          "pcb_assembly_t2",
          "pcb_assembly_t3",
          "pcb_storage",
          "pcb_storage_2",
          "pcb_storage_3",
          "pcb_storage_4",
          "pcb_storage_5",
        ],
      },
    },
    plastic: {
      id: "plastic",
      icon: "Plastic.png",
      name: "Plastic",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "chemical_plant",
          "chemical_plant_ii",
          "food_processor",
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "polymerization_plant",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "consumer_electronics_assembly_t1",
          "disinfectant_production",
          "disinfectant_production_2",
          "medical_equipment_assembly_t1",
          "medical_equipment_assembly_t2",
          "microchip_manufacturing_stage_2a",
          "microchip_manufacturing_stage_2a_2",
          "microchip_manufacturing_stage_2b",
          "microchip_manufacturing_stage_2b_2",
          "microchip_manufacturing_stage_2c",
          "microchip_manufacturing_stage_2c_2",
          "microchip_manufacturing_stage_2d",
          "microchip_manufacturing_stage_2d_2",
          "pcb_assembly_t1",
          "pcb_assembly_t2",
          "pcb_assembly_t3",
          "plastic_storage",
          "plastic_storage_2",
          "plastic_storage_3",
          "plastic_storage_4",
          "plastic_storage_5",
          "snack_production",
          "snack_production_2",
        ],
        output: [
          "plastic_making",
          "plastic_making_2",
          "plastic_storage",
          "plastic_storage_2",
          "plastic_storage_3",
          "plastic_storage_4",
          "plastic_storage_5",
        ],
      },
    },
    poppy: {
      id: "poppy",
      icon: "Poppy.png",
      name: "Poppy",
      machines: {
        input: [
          "chemical_plant_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "morphine_production",
          "poppy_storage",
          "poppy_storage_2",
          "poppy_storage_3",
          "poppy_storage_4",
        ],
        output: [
          "poppy_storage",
          "poppy_storage_2",
          "poppy_storage_3",
          "poppy_storage_4",
        ],
      },
    },
    potato: {
      id: "potato",
      icon: "Potato.png",
      name: "Potato",
      machines: {
        input: [
          "anaerobic_digester",
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "animal_feed_production",
          "digestion_2",
          "potato_storage",
          "potato_storage_2",
          "potato_storage_3",
          "potato_storage_4",
          "snack_production",
        ],
        output: [
          "potato_storage",
          "potato_storage_2",
          "potato_storage_3",
          "potato_storage_4",
        ],
      },
    },
    quartz: {
      id: "quartz",
      icon: "Quartz.png",
      name: "Quartz",
      machines: {
        input: [
          "arc_furnace",
          "arc_furnace_ii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "quartz_storage",
          "quartz_storage_2",
          "quartz_storage_3",
          "quartz_storage_4",
          "silicon_smelting_arc",
          "silicon_smelting_arc_ii",
        ],
        output: [
          "quartz_storage",
          "quartz_storage_2",
          "quartz_storage_3",
          "quartz_storage_4",
        ],
      },
    },
    recyclables: {
      id: "recyclables",
      icon: "Recyclables.png",
      name: "Recyclables",
      machines: {
        input: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "waste_sorting_plant",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "maintenance_depot",
          "maintenance_ii_depot",
          "maintenance_iii_depot",
          "research_lab_ii",
          "research_lab_iii",
          "research_lab_iv",
          "research_lab_v",
        ],
      },
      recipes: {
        input: [
          "recyclables_storage",
          "recyclables_storage_2",
          "recyclables_storage_3",
          "recyclables_storage_4",
          "wastesortingplant",
        ],
        output: [
          "maintenance_i_3",
          "maintenance_i_5",
          "maintenance_ii_2",
          "maintenance_ii_4",
          "maintenance_iii_2",
          "maintenance_iii_4",
          "recyclables_storage",
          "recyclables_storage_2",
          "recyclables_storage_3",
          "recyclables_storage_4",
          "research_lab_ii",
          "research_lab_iii",
          "research_lab_iv",
          "research_lab_v",
        ],
      },
    },
    rock: {
      id: "rock",
      icon: "Rock.png",
      name: "Rock",
      machines: {
        input: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "settling_tank",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "rock_mine",
        ],
      },
      recipes: {
        input: [
          "fluoride_leaching",
          "rock_crushing",
          "rock_storage",
          "rock_storage_2",
          "rock_storage_3",
          "rock_storage_4",
        ],
        output: [
          "rock_mining",
          "rock_storage",
          "rock_storage_2",
          "rock_storage_3",
          "rock_storage_4",
        ],
      },
    },
    rubber: {
      id: "rubber",
      icon: "Rubber.png",
      name: "Rubber",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "rubber_maker",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "electronics_assembly_t1",
          "electronics_assembly_t2",
          "electronics_assembly_t3",
          "electronics_assembly_t4",
          "electronics_assembly_t5",
          "rubber_storage",
          "rubber_storage_2",
          "rubber_storage_3",
          "rubber_storage_4",
          "rubber_storage_5",
        ],
        output: [
          "rubber_production",
          "rubber_production_alt",
          "rubber_production_coal",
          "rubber_production_coal_alt",
          "rubber_production_ethanol",
          "rubber_storage",
          "rubber_storage_2",
          "rubber_storage_3",
          "rubber_storage_4",
          "rubber_storage_5",
        ],
      },
    },
    salt: {
      id: "salt",
      icon: "Salt.png",
      name: "Salt",
      machines: {
        input: [
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
        ],
        output: [
          "evaporation_pond",
          "evaporation_pond_heated",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "brine_production",
          "glass_mix_mixing",
          "glass_mix_mixing_2",
          "meat_processing",
          "salt_storage",
          "salt_storage_2",
          "salt_storage_3",
          "salt_storage_4",
          "sausage_processing",
          "snack_production",
          "snack_production_2",
        ],
        output: [
          "salt_making",
          "salt_making_2",
          "salt_making_3",
          "salt_making_4",
          "salt_storage",
          "salt_storage_2",
          "salt_storage_3",
          "salt_storage_4",
        ],
      },
    },
    sand: {
      id: "sand",
      icon: "Sand.png",
      name: "Sand",
      machines: {
        input: [
          "arc_furnace_ii",
          "blast_furnace_ii",
          "concrete_mixer",
          "concrete_mixer_ii",
          "concrete_mixer_iii",
          "gold_furnace",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
          "wastewater_treatment",
        ],
        output: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "sand_mine",
        ],
      },
      recipes: {
        input: [
          "concrete_mixing",
          "concrete_mixing_2",
          "concrete_mixing_5",
          "concrete_mixing_6",
          "concrete_mixing_7",
          "concrete_mixing_8",
          "copper_smelting_arc",
          "copper_smelting_sand",
          "filter_media_mixing",
          "glass_mix_mixing",
          "glass_mix_mixing_2",
          "gold_smelting",
          "sand_storage",
          "sand_storage_2",
          "sand_storage_3",
          "sand_storage_4",
          "water_treatment",
        ],
        output: [
          "gravel_crushing",
          "sand_mining",
          "sand_storage",
          "sand_storage_2",
          "sand_storage_3",
          "sand_storage_4",
        ],
      },
    },
    sausage: {
      id: "sausage",
      icon: "Sausage.png",
      name: "Sausage",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "food_processor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "sausage_storage",
          "sausage_storage_2",
          "sausage_storage_3",
          "sausage_storage_4",
          "sausage_storage_5",
        ],
        output: [
          "sausage_processing",
          "sausage_storage",
          "sausage_storage_2",
          "sausage_storage_3",
          "sausage_storage_4",
          "sausage_storage_5",
        ],
      },
    },
    seawater: {
      id: "seawater",
      icon: "Seawater.png",
      name: "Seawater",
      machines: {
        input: [
          "basic_distiller",
          "evaporation_pond",
          "evaporation_pond_heated",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "gas_injection_pump",
          "liquid_dump",
          "thermal_desalinator",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "seawater_pump",
          "seawater_pump_tall",
        ],
      },
      recipes: {
        input: [
          "brine_making",
          "brine_making_2",
          "co2_injection",
          "salt_making",
          "salt_making_3",
          "seawater_dumping",
          "seawater_storage",
          "seawater_storage_2",
          "seawater_storage_3",
          "seawater_storage_4",
          "thermal_desalination",
          "thermal_desalination_2",
          "thermal_desalination_3",
          "water_desalination_basic",
        ],
        output: [
          "ocean_water_pumping",
          "ocean_water_pumping_ii",
          "seawater_storage",
          "seawater_storage_2",
          "seawater_storage_3",
          "seawater_storage_4",
        ],
      },
    },
    server: {
      id: "server",
      icon: "Server.png",
      name: "Server",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "server_storage",
          "server_storage_2",
          "server_storage_3",
          "server_storage_4",
          "server_storage_5",
        ],
        output: [
          "server_assembly_t1",
          "server_assembly_t2",
          "server_assembly_t3",
          "server_storage",
          "server_storage_2",
          "server_storage_3",
          "server_storage_4",
          "server_storage_5",
        ],
      },
    },
    silicon_poly: {
      id: "silicon_poly",
      icon: "SiliconPoly.png",
      name: "Silicon (Poly)",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "silicon_crystallizer",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "silicon_reactor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "electronics_2_assembly_t1",
          "electronics_2_assembly_t2",
          "electronics_2_assembly_t3",
          "silicon_crystallization",
          "silicon_poly_storage",
          "silicon_poly_storage_2",
          "silicon_poly_storage_3",
          "silicon_poly_storage_4",
          "silicon_poly_storage_5",
          "solar_cell_assembly",
          "solar_cell_assembly_2",
          "solar_cell_assembly_3",
        ],
        output: [
          "silicon_poly_storage",
          "silicon_poly_storage_2",
          "silicon_poly_storage_3",
          "silicon_poly_storage_4",
          "silicon_poly_storage_5",
          "silicon_treatment",
        ],
      },
    },
    silicon_wafer: {
      id: "silicon_wafer",
      icon: "SiliconWafer.png",
      name: "Silicon Wafer",
      machines: {
        input: [
          "assembly_robotic_ii",
          "microchip_machine",
          "microchip_machine_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "silicon_crystallizer",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "microchip_manufacturing_stage_1a",
          "microchip_manufacturing_stage_1a_2",
          "silicon_wafer_storage",
          "silicon_wafer_storage_2",
          "silicon_wafer_storage_3",
          "silicon_wafer_storage_4",
          "silicon_wafer_storage_5",
          "solar_cell_assembly_4",
        ],
        output: [
          "silicon_crystallization",
          "silicon_wafer_storage",
          "silicon_wafer_storage_2",
          "silicon_wafer_storage_3",
          "silicon_wafer_storage_4",
          "silicon_wafer_storage_5",
        ],
      },
    },
    slag: {
      id: "slag",
      icon: "Slag.png",
      name: "Slag",
      machines: {
        input: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "arc_furnace",
          "arc_furnace_ii",
          "blast_furnace",
          "blast_furnace_ii",
          "glass_maker",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
          "settling_tank",
          "slag_mine",
          "wastewater_treatment",
        ],
      },
      recipes: {
        input: [
          "slag_crushing",
          "slag_storage",
          "slag_storage_2",
          "slag_storage_3",
          "slag_storage_4",
        ],
        output: [
          "copper_smelting",
          "copper_smelting_arc",
          "copper_smelting_sand",
          "fluoride_leaching",
          "glass_casting",
          "glass_smelting",
          "glass_smelting_2",
          "glass_smelting_3",
          "iron_smelting",
          "iron_smelting_arc",
          "iron_smelting_lime",
          "silicon_smelting_arc",
          "silicon_smelting_arc_ii",
          "slag_mining",
          "slag_storage",
          "slag_storage_2",
          "slag_storage_3",
          "slag_storage_4",
          "sulfur_neutralization",
          "toxic_slurry_treatment",
        ],
      },
    },
    slag_crushed: {
      id: "slag_crushed",
      icon: "SlagCrushed.png",
      name: "Slag Crushed",
      machines: {
        input: [
          "concrete_mixer",
          "concrete_mixer_ii",
          "concrete_mixer_iii",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "slag_crushed_mine",
        ],
      },
      recipes: {
        input: [
          "concrete_mixing",
          "concrete_mixing_3",
          "concrete_mixing_5",
          "concrete_mixing_7",
          "slag_crushed_storage",
          "slag_crushed_storage_2",
          "slag_crushed_storage_3",
          "slag_crushed_storage_4",
        ],
        output: [
          "slag_crushed_mining",
          "slag_crushed_storage",
          "slag_crushed_storage_2",
          "slag_crushed_storage_3",
          "slag_crushed_storage_4",
          "slag_crushing",
        ],
      },
    },
    sludge: {
      id: "sludge",
      icon: "Sludge.png",
      name: "Sludge",
      machines: {
        input: [
          "anaerobic_digester",
          "burner_solid",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "wastewater_treatment",
        ],
      },
      recipes: {
        input: [
          "burning_7",
          "digestion",
          "sludge_storage",
          "sludge_storage_2",
          "sludge_storage_3",
          "sludge_storage_4",
        ],
        output: [
          "sludge_storage",
          "sludge_storage_2",
          "sludge_storage_3",
          "sludge_storage_4",
          "water_treatment",
          "water_treatment_advanced",
        ],
      },
    },
    snack: {
      id: "snack",
      icon: "Snack.png",
      name: "Snack",
      machines: {
        input: [
          "assembly_electric_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "food_processor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "food_pack_assembly_eggs",
          "food_pack_assembly_meat",
          "snack_storage",
          "snack_storage_2",
          "snack_storage_3",
          "snack_storage_4",
          "snack_storage_5",
        ],
        output: [
          "snack_production",
          "snack_production_2",
          "snack_storage",
          "snack_storage_2",
          "snack_storage_3",
          "snack_storage_4",
          "snack_storage_5",
        ],
      },
    },
    solar_cell: {
      id: "solar_cell",
      icon: "SolarCell.png",
      name: "Solar Cell",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "solar_cell_storage",
          "solar_cell_storage_2",
          "solar_cell_storage_3",
          "solar_cell_storage_4",
          "solar_cell_storage_5",
        ],
        output: [
          "solar_cell_assembly",
          "solar_cell_assembly_2",
          "solar_cell_assembly_3",
          "solar_cell_storage",
          "solar_cell_storage_2",
          "solar_cell_storage_3",
          "solar_cell_storage_4",
          "solar_cell_storage_5",
        ],
      },
    },
    solar_cell_mono: {
      id: "solar_cell_mono",
      icon: "SolarCellMono.png",
      name: "Solar Cell Mono",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_robotic_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "solar_cell_mono_storage",
          "solar_cell_mono_storage_2",
          "solar_cell_mono_storage_3",
          "solar_cell_mono_storage_4",
          "solar_cell_mono_storage_5",
        ],
        output: [
          "solar_cell_assembly_4",
          "solar_cell_mono_storage",
          "solar_cell_mono_storage_2",
          "solar_cell_mono_storage_3",
          "solar_cell_mono_storage_4",
          "solar_cell_mono_storage_5",
        ],
      },
    },
    sour_water: {
      id: "sour_water",
      icon: "SourWater.png",
      name: "Sour Water",
      machines: {
        input: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "liquid_dump",
          "sour_water_stripper",
        ],
        output: [
          "chemical_plant_ii",
          "cracking_unit",
          "distillation_stage_i",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
        ],
      },
      recipes: {
        input: [
          "sour_water_dumping",
          "sour_water_storage",
          "sour_water_storage_2",
          "sour_water_storage_3",
          "sour_water_storage_4",
          "sour_water_stripping_recovery",
        ],
        output: [
          "crude_oil_refining",
          "diesel_reforming",
          "graphite_production",
          "naphtha_reforming_2",
          "sour_water_storage",
          "sour_water_storage_2",
          "sour_water_storage_3",
          "sour_water_storage_4",
        ],
      },
    },
    soybean: {
      id: "soybean",
      icon: "Soybean.png",
      name: "Soybean",
      machines: {
        input: [
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mill",
          "mixer",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "animal_feed_production_4",
          "soybean_milling",
          "soybean_storage",
          "soybean_storage_2",
          "soybean_storage_3",
          "soybean_storage_4",
          "tofu_making",
        ],
        output: [
          "soybean_storage",
          "soybean_storage_2",
          "soybean_storage_3",
          "soybean_storage_4",
        ],
      },
    },
    spent_fuel: {
      id: "spent_fuel",
      icon: "SpentFuel.png",
      name: "Spent Fuel",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "nuclear_reactor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "spent_fuel_storage",
          "spent_fuel_storage_2",
          "spent_fuel_storage_3",
          "spent_fuel_storage_4",
          "spent_fuel_storage_5",
        ],
        output: [
          "nuclearreactor",
          "spent_fuel_storage",
          "spent_fuel_storage_2",
          "spent_fuel_storage_3",
          "spent_fuel_storage_4",
          "spent_fuel_storage_5",
        ],
      },
    },
    steam_depleted: {
      id: "steam_depleted",
      icon: "SteamDepleted.png",
      name: "Steam Depleted",
      machines: {
        input: [
          "cooling_tower",
          "cooling_tower_large",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "smoke_stack",
          "smoke_stack_large",
          "thermal_desalinator",
        ],
        output: [
          "boiler_gas",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "low-pressure_turbine",
          "low-pressure_turbine_ii",
        ],
      },
      recipes: {
        input: [
          "depleted_steam_condensation",
          "depleted_steam_condensation_2",
          "product_disposal",
          "product_disposal_8",
          "steam_depleted_storage",
          "steam_depleted_storage_2",
          "steam_depleted_storage_3",
          "steam_depleted_storage_4",
          "thermal_desalination_3",
        ],
        output: [
          "steam_depleted_storage",
          "steam_depleted_storage_2",
          "steam_depleted_storage_3",
          "steam_depleted_storage_4",
          "steam_generation_10",
          "turbinelowpress",
          "turbinelowpresst2",
        ],
      },
    },
    steam_hi: {
      id: "steam_hi",
      icon: "SteamHi.png",
      name: "Steam Hi",
      machines: {
        input: [
          "cooling_tower",
          "cooling_tower_large",
          "cracking_unit",
          "distillation_stage_i",
          "distillation_stage_ii",
          "distillation_stage_iii",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "high-pressure_turbine",
          "high-pressure_turbine_ii",
          "hydrogen_reformer",
          "smoke_stack",
          "smoke_stack_large",
          "sour_water_stripper",
          "thermal_desalinator",
        ],
        output: [
          "arc_furnace_ii",
          "boiler_coal",
          "boiler_electric",
          "boiler_gas",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "nuclear_reactor",
        ],
      },
      recipes: {
        input: [
          "crude_oil_refining",
          "crude_oil_refining_2",
          "diesel_reforming",
          "heavy_distillate_refining",
          "hi-press_steam_condensation",
          "hi-press_steam_condensation_2",
          "hydrogen_reforming",
          "naphtha_reforming_2",
          "product_disposal_2",
          "product_disposal_9",
          "sour_water_stripping_recovery",
          "steam_hi_storage",
          "steam_hi_storage_2",
          "steam_hi_storage_3",
          "steam_hi_storage_4",
          "thermal_desalination",
          "turbinehighpress",
          "turbinehighpresst2",
        ],
        output: [
          "nuclearreactor",
          "silicon_smelting_arc_ii",
          "steam_generation",
          "steam_generation_10",
          "steam_generation_11",
          "steam_generation_2",
          "steam_generation_3",
          "steam_generation_4",
          "steam_generation_5",
          "steam_generation_6",
          "steam_generation_7",
          "steam_generation_8",
          "steam_generation_9",
          "steam_hi_storage",
          "steam_hi_storage_2",
          "steam_hi_storage_3",
          "steam_hi_storage_4",
        ],
      },
    },
    steam_lo: {
      id: "steam_lo",
      icon: "SteamLo.png",
      name: "Steam Lo",
      machines: {
        input: [
          "cooling_tower",
          "cooling_tower_large",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "low-pressure_turbine",
          "low-pressure_turbine_ii",
          "smoke_stack",
          "smoke_stack_large",
          "thermal_desalinator",
        ],
        output: [
          "arc_furnace_ii",
          "exhaust_scrubber",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "high-pressure_turbine",
          "high-pressure_turbine_ii",
        ],
      },
      recipes: {
        input: [
          "lo-press_steam_condensation",
          "lo-press_steam_condensation_2",
          "product_disposal_10",
          "product_disposal_3",
          "steam_lo_storage",
          "steam_lo_storage_2",
          "steam_lo_storage_3",
          "steam_lo_storage_4",
          "thermal_desalination_2",
          "turbinelowpress",
          "turbinelowpresst2",
        ],
        output: [
          "copper_scrap_smelting_arc",
          "copper_smelting_arc",
          "exhaust_filtering",
          "glass_smelting_3",
          "glass_smelting_4",
          "iron_scrap_smelting_arc",
          "iron_smelting_arc",
          "steam_lo_storage",
          "steam_lo_storage_2",
          "steam_lo_storage_3",
          "steam_lo_storage_4",
          "turbinehighpress",
          "turbinehighpresst2",
        ],
      },
    },
    steel: {
      id: "steel",
      icon: "Steel.png",
      name: "Steel",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_robotic",
          "assembly_robotic_ii",
          "chemical_plant",
          "chemical_plant_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "cooled_caster",
          "cooled_caster_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "anesthetics_production",
          "consumer_electronics_assembly_t1",
          "cp3_assembly_t1",
          "cp3_assembly_t2",
          "cp3_assembly_t3",
          "household_appliances_assembly_t1",
          "household_appliances_assembly_t2",
          "household_appliances_assembly_t3",
          "household_goods_assembly_t1",
          "household_goods_assembly_t2",
          "household_goods_assembly_t3",
          "liquid_nitrogen_production",
          "liquid_nitrogen_production_2",
          "mech._parts_assembly_t3-2",
          "mech._parts_assembly_t4",
          "medical_equipment_assembly_t1",
          "medical_equipment_assembly_t2",
          "server_assembly_t1",
          "server_assembly_t2",
          "server_assembly_t3",
          "solar_cell_assembly",
          "solar_cell_assembly_2",
          "solar_cell_assembly_3",
          "solar_cell_assembly_4",
          "steel_storage",
          "steel_storage_2",
          "steel_storage_3",
          "steel_storage_4",
          "steel_storage_5",
          "uranium_rods_t1",
          "vehicle_parts_2_assembly_t1",
          "vehicle_parts_2_assembly_t2",
        ],
        output: [
          "steel_casting_cooled",
          "steel_casting_cooled_2",
          "steel_storage",
          "steel_storage_2",
          "steel_storage_3",
          "steel_storage_4",
          "steel_storage_5",
        ],
      },
    },
    sugar: {
      id: "sugar",
      icon: "Sugar.png",
      name: "Sugar",
      machines: {
        input: [
          "baking_unit",
          "fermentation_tank",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "antibiotics",
          "cake_production",
          "ethanol_making_sugar",
          "sugar_storage",
          "sugar_storage_2",
          "sugar_storage_3",
          "sugar_storage_4",
        ],
        output: [
          "sugar_refining_cane",
          "sugar_storage",
          "sugar_storage_2",
          "sugar_storage_3",
          "sugar_storage_4",
        ],
      },
    },
    sugar_cane: {
      id: "sugar_cane",
      icon: "SugarCane.png",
      name: "Sugar Cane",
      machines: {
        input: [
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "sugar_cane_storage",
          "sugar_cane_storage_2",
          "sugar_cane_storage_3",
          "sugar_cane_storage_4",
          "sugar_refining_cane",
        ],
        output: [
          "sugar_cane_storage",
          "sugar_cane_storage_2",
          "sugar_cane_storage_3",
          "sugar_cane_storage_4",
        ],
      },
    },
    sulfur: {
      id: "sulfur",
      icon: "Sulfur.png",
      name: "Sulfur",
      machines: {
        input: [
          "burner_solid",
          "food_processor",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mixer",
          "rubber_maker",
        ],
        output: [
          "exhaust_scrubber",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "sour_water_stripper",
        ],
      },
      recipes: {
        input: [
          "acid_mixing",
          "burning_6",
          "fertilizer_ii_synthesis",
          "rubber_production",
          "rubber_production_alt",
          "rubber_production_ethanol",
          "sulfur_neutralization",
          "sulfur_storage",
          "sulfur_storage_2",
          "sulfur_storage_3",
          "sulfur_storage_4",
          "tofu_making",
        ],
        output: [
          "exhaust_filtering",
          "sour_water_stripping_recovery",
          "sulfur_storage",
          "sulfur_storage_2",
          "sulfur_storage_3",
          "sulfur_storage_4",
        ],
      },
    },
    tofu: {
      id: "tofu",
      icon: "Tofu.png",
      name: "Tofu",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "food_processor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "tofu_storage",
          "tofu_storage_2",
          "tofu_storage_3",
          "tofu_storage_4",
          "tofu_storage_5",
        ],
        output: [
          "tofu_making",
          "tofu_storage",
          "tofu_storage_2",
          "tofu_storage_3",
          "tofu_storage_4",
          "tofu_storage_5",
        ],
      },
    },
    toxic_slurry: {
      id: "toxic_slurry",
      icon: "ToxicSlurry.png",
      name: "Toxic Slurry",
      machines: {
        input: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "liquid_dump",
          "wastewater_treatment",
        ],
        output: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "settling_tank",
        ],
      },
      recipes: {
        input: [
          "toxic_slurry_dumping",
          "toxic_slurry_storage",
          "toxic_slurry_storage_2",
          "toxic_slurry_storage_3",
          "toxic_slurry_storage_4",
          "toxic_slurry_treatment",
        ],
        output: [
          "gold_settling",
          "toxic_slurry_storage",
          "toxic_slurry_storage_2",
          "toxic_slurry_storage_3",
          "toxic_slurry_storage_4",
          "uranium_leaching",
        ],
      },
    },
    uranium_ore: {
      id: "uranium_ore",
      icon: "UraniumOre.png",
      name: "Uranium Ore",
      machines: {
        input: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "uranium_crushing",
          "uranium_ore_storage",
          "uranium_ore_storage_2",
          "uranium_ore_storage_3",
          "uranium_ore_storage_4",
        ],
        output: [
          "uranium_ore_storage",
          "uranium_ore_storage_2",
          "uranium_ore_storage_3",
          "uranium_ore_storage_4",
        ],
      },
    },
    uranium_ore_crushed: {
      id: "uranium_ore_crushed",
      icon: "UraniumOreCrushed.png",
      name: "Uranium Ore Crushed",
      machines: {
        input: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "settling_tank",
        ],
        output: [
          "crusher",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "uranium_leaching",
          "uranium_ore_crushed_storage",
          "uranium_ore_crushed_storage_2",
          "uranium_ore_crushed_storage_3",
          "uranium_ore_crushed_storage_4",
        ],
        output: [
          "uranium_crushing",
          "uranium_ore_crushed_storage",
          "uranium_ore_crushed_storage_2",
          "uranium_ore_crushed_storage_3",
          "uranium_ore_crushed_storage_4",
        ],
      },
    },
    uranium_pellets: {
      id: "uranium_pellets",
      icon: "UraniumPellets.png",
      name: "Uranium Pellets",
      machines: {
        input: [
          "assembly_electric_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "enrichment_plant",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "uranium_pellets_storage",
          "uranium_pellets_storage_2",
          "uranium_pellets_storage_3",
          "uranium_pellets_storage_4",
          "uranium_pellets_storage_5",
          "uranium_rods_t1",
        ],
        output: [
          "uranium_enrichment",
          "uranium_pellets_storage",
          "uranium_pellets_storage_2",
          "uranium_pellets_storage_3",
          "uranium_pellets_storage_4",
          "uranium_pellets_storage_5",
        ],
      },
    },
    uranium_rod: {
      id: "uranium_rod",
      icon: "UraniumRod.png",
      name: "Uranium Rod",
      machines: {
        input: [
          "nuclear_reactor",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "nuclearreactor",
          "uranium_rod_storage",
          "uranium_rod_storage_2",
          "uranium_rod_storage_3",
          "uranium_rod_storage_4",
          "uranium_rod_storage_5",
        ],
        output: [
          "uranium_rod_storage",
          "uranium_rod_storage_2",
          "uranium_rod_storage_3",
          "uranium_rod_storage_4",
          "uranium_rod_storage_5",
          "uranium_rods_t1",
        ],
      },
    },
    vegetables: {
      id: "vegetables",
      icon: "Vegetables.png",
      name: "Vegetables",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "vegetables_storage",
          "vegetables_storage_2",
          "vegetables_storage_3",
          "vegetables_storage_4",
          "vegetables_storage_5",
        ],
        output: [
          "vegetables_storage",
          "vegetables_storage_2",
          "vegetables_storage_3",
          "vegetables_storage_4",
          "vegetables_storage_5",
        ],
      },
    },
    vehicle_parts: {
      id: "vehicle_parts",
      icon: "VehicleParts.png",
      name: "Vehicle Parts",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "vehicle_parts_2_assembly_t1",
          "vehicle_parts_2_assembly_t2",
          "vehicle_parts_storage",
          "vehicle_parts_storage_2",
          "vehicle_parts_storage_3",
          "vehicle_parts_storage_4",
          "vehicle_parts_storage_5",
        ],
        output: [
          "vehicle_parts_assembly_t1",
          "vehicle_parts_assembly_t2",
          "vehicle_parts_assembly_t3",
          "vehicle_parts_assembly_t4",
          "vehicle_parts_storage",
          "vehicle_parts_storage_2",
          "vehicle_parts_storage_3",
          "vehicle_parts_storage_4",
          "vehicle_parts_storage_5",
        ],
      },
    },
    vehicle_parts_ii: {
      id: "vehicle_parts_ii",
      icon: "VehicleParts2.png",
      name: "Vehicle Parts II",
      machines: {
        input: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "vehicle_parts_3_assembly_t1",
          "vehicle_parts_3_assembly_t2",
          "vehicle_parts_ii_storage",
          "vehicle_parts_ii_storage_2",
          "vehicle_parts_ii_storage_3",
          "vehicle_parts_ii_storage_4",
          "vehicle_parts_ii_storage_5",
        ],
        output: [
          "vehicle_parts_2_assembly_t1",
          "vehicle_parts_2_assembly_t2",
          "vehicle_parts_ii_storage",
          "vehicle_parts_ii_storage_2",
          "vehicle_parts_ii_storage_3",
          "vehicle_parts_ii_storage_4",
          "vehicle_parts_ii_storage_5",
        ],
      },
    },
    vehicle_parts_iii: {
      id: "vehicle_parts_iii",
      icon: "VehicleParts3.png",
      name: "Vehicle Parts III",
      machines: {
        input: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "assembly_electric_ii",
          "assembly_robotic",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "vehicle_parts_iii_storage",
          "vehicle_parts_iii_storage_2",
          "vehicle_parts_iii_storage_3",
          "vehicle_parts_iii_storage_4",
          "vehicle_parts_iii_storage_5",
        ],
        output: [
          "vehicle_parts_3_assembly_t1",
          "vehicle_parts_3_assembly_t2",
          "vehicle_parts_iii_storage",
          "vehicle_parts_iii_storage_2",
          "vehicle_parts_iii_storage_3",
          "vehicle_parts_iii_storage_4",
          "vehicle_parts_iii_storage_5",
        ],
      },
    },
    waste: {
      id: "waste",
      icon: "Waste.png",
      name: "Waste",
      machines: {
        input: [
          "burner_solid",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "waste_mine",
        ],
      },
      recipes: {
        input: [
          "burning",
          "waste_storage",
          "waste_storage_2",
          "waste_storage_3",
          "waste_storage_4",
        ],
        output: [
          "waste_mining",
          "waste_storage",
          "waste_storage_2",
          "waste_storage_3",
          "waste_storage_4",
        ],
      },
    },
    waste_water: {
      id: "waste_water",
      icon: "WasteWater.png",
      name: "Waste Water",
      machines: {
        input: [
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "liquid_dump",
          "wastewater_treatment",
        ],
        output: [
          "basic_distiller",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "rubber_maker",
        ],
      },
      recipes: {
        input: [
          "waste_water_dumping",
          "waste_water_storage",
          "waste_water_storage_2",
          "waste_water_storage_3",
          "waste_water_storage_4",
          "water_treatment",
          "water_treatment_advanced",
        ],
        output: [
          "diesel_distillation_basic",
          "rubber_production_coal",
          "rubber_production_coal_alt",
          "waste_water_storage",
          "waste_water_storage_2",
          "waste_water_storage_3",
          "waste_water_storage_4",
        ],
      },
    },
    water: {
      id: "water",
      icon: "Water.png",
      name: "Water",
      machines: {
        input: [
          "arc_furnace_ii",
          "baking_unit",
          "boiler_coal",
          "boiler_electric",
          "boiler_gas",
          "chemical_plant",
          "chemical_plant_ii",
          "concrete_mixer",
          "concrete_mixer_ii",
          "concrete_mixer_iii",
          "cooled_caster",
          "cooled_caster_ii",
          "copper_electrolysis",
          "electrolyzer",
          "exhaust_scrubber",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "food_processor",
          "liquid_dump",
          "microchip_machine",
          "microchip_machine_ii",
          "mill",
          "mixer",
          "nuclear_reactor",
          "silicon_crystallizer",
          "water_chiller",
        ],
        output: [
          "basic_distiller",
          "basic_rack",
          "cooling_tower",
          "cooling_tower_large",
          "fluid_storage",
          "fluid_storage_ii",
          "fluid_storage_iii",
          "fluid_storage_iv",
          "groundwater_pump",
          "sour_water_stripper",
          "thermal_desalinator",
          "wastewater_treatment",
        ],
      },
      recipes: {
        input: [
          "acid_mixing",
          "bread_making",
          "brine_production",
          "concrete_mixing",
          "concrete_mixing_2",
          "concrete_mixing_3",
          "concrete_mixing_4",
          "concrete_mixing_5",
          "concrete_mixing_6",
          "concrete_mixing_7",
          "concrete_mixing_8",
          "copper_purification_water",
          "copper_scrap_smelting_arc",
          "copper_smelting_arc",
          "corn_milling_wet",
          "exhaust_filtering",
          "fertilizer_mixing",
          "fertilizer_synthesis",
          "fertilizer_synthesis_2",
          "glass_smelting_3",
          "glass_smelting_4",
          "iron_scrap_smelting_arc",
          "iron_smelting_arc",
          "meat_processing",
          "microchip_manufacturing_stage_1a",
          "microchip_manufacturing_stage_1a_2",
          "microchip_manufacturing_stage_1b",
          "microchip_manufacturing_stage_1b_2",
          "microchip_manufacturing_stage_1c",
          "microchip_manufacturing_stage_1c_2",
          "microchip_manufacturing_stage_1d",
          "microchip_manufacturing_stage_1d_2",
          "nuclearreactor",
          "silicon_crystallization",
          "silicon_smelting_arc_ii",
          "steam_generation",
          "steam_generation_10",
          "steam_generation_11",
          "steam_generation_2",
          "steam_generation_3",
          "steam_generation_4",
          "steam_generation_5",
          "steam_generation_6",
          "steam_generation_7",
          "steam_generation_8",
          "steam_generation_9",
          "steel_casting_cooled",
          "steel_casting_cooled_2",
          "sugar_refining_cane",
          "tofu_making",
          "water_cooling",
          "water_dumping",
          "water_electrolysis",
          "water_storage",
          "water_storage_2",
          "water_storage_3",
          "water_storage_4",
        ],
        output: [
          "create_computing_power",
          "depleted_steam_condensation",
          "depleted_steam_condensation_2",
          "hi-press_steam_condensation",
          "hi-press_steam_condensation_2",
          "lo-press_steam_condensation",
          "lo-press_steam_condensation_2",
          "sour_water_stripping_recovery",
          "thermal_desalination",
          "thermal_desalination_2",
          "thermal_desalination_3",
          "toxic_slurry_treatment",
          "water_desalination_basic",
          "water_pumping",
          "water_storage",
          "water_storage_2",
          "water_storage_3",
          "water_storage_4",
          "water_treatment",
          "water_treatment_advanced",
        ],
      },
    },
    water_pollution: {
      id: "water_pollution",
      icon: "WaterPollution.png",
      name: "Water Pollution",
      machines: {
        input: [],
        output: ["liquid_dump"],
      },
      recipes: {
        input: [],
        output: [
          "acid_dumping",
          "sour_water_dumping",
          "toxic_slurry_dumping",
          "waste_water_dumping",
        ],
      },
    },
    wheat: {
      id: "wheat",
      icon: "Wheat.png",
      name: "Wheat",
      machines: {
        input: [
          "anaerobic_digester",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "mill",
          "mixer",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
      },
      recipes: {
        input: [
          "animal_feed_production_2",
          "digestion_3",
          "wheat_milling",
          "wheat_storage",
          "wheat_storage_2",
          "wheat_storage_3",
          "wheat_storage_4",
        ],
        output: [
          "wheat_storage",
          "wheat_storage_2",
          "wheat_storage_3",
          "wheat_storage_4",
        ],
      },
    },
    wood: {
      id: "wood",
      icon: "Wood.png",
      name: "Wood",
      machines: {
        input: [
          "assembly_electric",
          "assembly_electric_ii",
          "assembly_manual",
          "assembly_robotic",
          "coal_maker",
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
        output: [
          "spent_fuel_storage",
          "unit_storage",
          "unit_storage_ii",
          "unit_storage_iii",
          "unit_storage_iv",
        ],
      },
      recipes: {
        input: [
          "charcoal_making",
          "cp_assembly_t1",
          "cp_assembly_t2",
          "cp_assembly_t3",
          "cp_assembly_t3_2",
          "household_goods_assembly_t1",
          "household_goods_assembly_t2",
          "household_goods_assembly_t3",
          "wood_storage",
          "wood_storage_2",
          "wood_storage_3",
          "wood_storage_4",
          "wood_storage_5",
        ],
        output: [
          "wood_storage",
          "wood_storage_2",
          "wood_storage_3",
          "wood_storage_4",
          "wood_storage_5",
        ],
      },
    },
    yellow_cake: {
      id: "yellow_cake",
      icon: "YellowCake.png",
      name: "Yellow Cake",
      machines: {
        input: [
          "enrichment_plant",
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
        ],
        output: [
          "loose_storage",
          "loose_storage_ii",
          "loose_storage_iii",
          "loose_storage_iv",
          "settling_tank",
        ],
      },
      recipes: {
        input: [
          "uranium_enrichment",
          "yellow_cake_storage",
          "yellow_cake_storage_2",
          "yellow_cake_storage_3",
          "yellow_cake_storage_4",
        ],
        output: [
          "uranium_leaching",
          "yellow_cake_storage",
          "yellow_cake_storage_2",
          "yellow_cake_storage_3",
          "yellow_cake_storage_4",
        ],
      },
    },
  },
  recipes: {
    acid_dumping: {
      id: "acid_dumping",
      name: "Acid Dumping",
      machine: "liquid_dump",
      duration: 60,
      inputs: [
        {
          product: "acid",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "water_pollution",
          quantity: 120,
        },
      ],
    },
    acid_mixing: {
      id: "acid_mixing",
      name: "Acid Mixing",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "sulfur",
          quantity: 6,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "acid",
          quantity: 24,
        },
      ],
    },
    acid_storage: {
      id: "acid_storage",
      name: "Acid Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "acid",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "acid",
          quantity: 4320,
        },
      ],
    },
    acid_storage_2: {
      id: "acid_storage_2",
      name: "Acid Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "acid",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "acid",
          quantity: 2160,
        },
      ],
    },
    acid_storage_3: {
      id: "acid_storage_3",
      name: "Acid Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "acid",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "acid",
          quantity: 360,
        },
      ],
    },
    acid_storage_4: {
      id: "acid_storage_4",
      name: "Acid Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "acid",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "acid",
          quantity: 180,
        },
      ],
    },
    air_separation: {
      id: "air_separation",
      name: "Air Separation",
      machine: "air_separator",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "oxygen",
          quantity: 36,
        },
        {
          product: "nitrogen",
          quantity: 36,
        },
      ],
    },
    ammonia_disposal: {
      id: "ammonia_disposal",
      name: "Ammonia Disposal",
      machine: "flare",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 24,
        },
      ],
    },
    ammonia_electrolysis: {
      id: "ammonia_electrolysis",
      name: "Ammonia Electrolysis",
      machine: "electrolyzer",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "nitrogen",
          quantity: 24,
        },
        {
          product: "hydrogen",
          quantity: 12,
        },
      ],
    },
    ammonia_storage: {
      id: "ammonia_storage",
      name: "Ammonia Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "ammonia",
          quantity: 4320,
        },
      ],
    },
    ammonia_storage_2: {
      id: "ammonia_storage_2",
      name: "Ammonia Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "ammonia",
          quantity: 2160,
        },
      ],
    },
    ammonia_storage_3: {
      id: "ammonia_storage_3",
      name: "Ammonia Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "ammonia",
          quantity: 360,
        },
      ],
    },
    ammonia_storage_4: {
      id: "ammonia_storage_4",
      name: "Ammonia Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "ammonia",
          quantity: 180,
        },
      ],
    },
    ammonia_synthesis: {
      id: "ammonia_synthesis",
      name: "Ammonia Synthesis",
      machine: "chemical_plant",
      duration: 60,
      inputs: [
        {
          product: "hydrogen",
          quantity: 6,
        },
        {
          product: "nitrogen",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "ammonia",
          quantity: 6,
        },
      ],
    },
    ammonia_synthesis_2: {
      id: "ammonia_synthesis_2",
      name: "Ammonia Synthesis",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "hydrogen",
          quantity: 12,
        },
        {
          product: "nitrogen",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "ammonia",
          quantity: 12,
        },
      ],
    },
    anesthetics_production: {
      id: "anesthetics_production",
      name: "Anesthetics Production",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 6,
        },
        {
          product: "hydrogen_fluoride",
          quantity: 12,
        },
        {
          product: "steel",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "anesthetics",
          quantity: 24,
        },
      ],
    },
    anesthetics_storage: {
      id: "anesthetics_storage",
      name: "Anesthetics Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "anesthetics",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "anesthetics",
          quantity: 4320,
        },
      ],
    },
    anesthetics_storage_2: {
      id: "anesthetics_storage_2",
      name: "Anesthetics Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "anesthetics",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "anesthetics",
          quantity: 2160,
        },
      ],
    },
    anesthetics_storage_3: {
      id: "anesthetics_storage_3",
      name: "Anesthetics Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "anesthetics",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "anesthetics",
          quantity: 360,
        },
      ],
    },
    anesthetics_storage_4: {
      id: "anesthetics_storage_4",
      name: "Anesthetics Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "anesthetics",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "anesthetics",
          quantity: 180,
        },
      ],
    },
    anesthetics_storage_5: {
      id: "anesthetics_storage_5",
      name: "Anesthetics Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "anesthetics",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "anesthetics",
          quantity: 5000,
        },
      ],
    },
    animal_feed_production: {
      id: "animal_feed_production",
      name: "Animal Feed Production",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "potato",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "animal_feed",
          quantity: 48,
        },
      ],
    },
    animal_feed_production_2: {
      id: "animal_feed_production_2",
      name: "Animal Feed Production",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "wheat",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "animal_feed",
          quantity: 36,
        },
      ],
    },
    animal_feed_production_3: {
      id: "animal_feed_production_3",
      name: "Animal Feed Production",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "corn",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "animal_feed",
          quantity: 66,
        },
      ],
    },
    animal_feed_production_4: {
      id: "animal_feed_production_4",
      name: "Animal Feed Production",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "soybean",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "animal_feed",
          quantity: 108,
        },
      ],
    },
    animal_feed_storage: {
      id: "animal_feed_storage",
      name: "Animal Feed Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "animal_feed",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "animal_feed",
          quantity: 4320,
        },
      ],
    },
    animal_feed_storage_2: {
      id: "animal_feed_storage_2",
      name: "Animal Feed Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "animal_feed",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "animal_feed",
          quantity: 2160,
        },
      ],
    },
    animal_feed_storage_3: {
      id: "animal_feed_storage_3",
      name: "Animal Feed Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "animal_feed",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "animal_feed",
          quantity: 360,
        },
      ],
    },
    animal_feed_storage_4: {
      id: "animal_feed_storage_4",
      name: "Animal Feed Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "animal_feed",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "animal_feed",
          quantity: 180,
        },
      ],
    },
    antibiotics: {
      id: "antibiotics",
      name: "Antibiotics",
      machine: "fermentation_tank",
      duration: 60,
      inputs: [
        {
          product: "sugar",
          quantity: 3,
        },
        {
          product: "ammonia",
          quantity: 0.75,
        },
        {
          product: "oxygen",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "antibiotics",
          quantity: 6,
        },
        {
          product: "carbon_dioxide",
          quantity: 3,
        },
      ],
    },
    antibiotics_storage: {
      id: "antibiotics_storage",
      name: "Antibiotics Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "antibiotics",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "antibiotics",
          quantity: 4320,
        },
      ],
    },
    antibiotics_storage_2: {
      id: "antibiotics_storage_2",
      name: "Antibiotics Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "antibiotics",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "antibiotics",
          quantity: 2160,
        },
      ],
    },
    antibiotics_storage_3: {
      id: "antibiotics_storage_3",
      name: "Antibiotics Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "antibiotics",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "antibiotics",
          quantity: 360,
        },
      ],
    },
    antibiotics_storage_4: {
      id: "antibiotics_storage_4",
      name: "Antibiotics Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "antibiotics",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "antibiotics",
          quantity: 180,
        },
      ],
    },
    antibiotics_storage_5: {
      id: "antibiotics_storage_5",
      name: "Antibiotics Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "antibiotics",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "antibiotics",
          quantity: 5000,
        },
      ],
    },
    biomass_storage: {
      id: "biomass_storage",
      name: "Biomass Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "biomass",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "biomass",
          quantity: 4320,
        },
      ],
    },
    biomass_storage_2: {
      id: "biomass_storage_2",
      name: "Biomass Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "biomass",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "biomass",
          quantity: 2160,
        },
      ],
    },
    biomass_storage_3: {
      id: "biomass_storage_3",
      name: "Biomass Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "biomass",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "biomass",
          quantity: 360,
        },
      ],
    },
    biomass_storage_4: {
      id: "biomass_storage_4",
      name: "Biomass Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "biomass",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "biomass",
          quantity: 180,
        },
      ],
    },
    bread_making: {
      id: "bread_making",
      name: "Bread Making",
      machine: "baking_unit",
      duration: 60,
      inputs: [
        {
          product: "flour",
          quantity: 16,
        },
        {
          product: "water",
          quantity: 8,
        },
      ],
      outputs: [
        {
          product: "bread",
          quantity: 24,
        },
      ],
    },
    bread_storage: {
      id: "bread_storage",
      name: "Bread Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "bread",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "bread",
          quantity: 4320,
        },
      ],
    },
    bread_storage_2: {
      id: "bread_storage_2",
      name: "Bread Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "bread",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "bread",
          quantity: 2160,
        },
      ],
    },
    bread_storage_3: {
      id: "bread_storage_3",
      name: "Bread Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "bread",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "bread",
          quantity: 360,
        },
      ],
    },
    bread_storage_4: {
      id: "bread_storage_4",
      name: "Bread Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "bread",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "bread",
          quantity: 180,
        },
      ],
    },
    bread_storage_5: {
      id: "bread_storage_5",
      name: "Bread Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "bread",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "bread",
          quantity: 5000,
        },
      ],
    },
    brine_dumping: {
      id: "brine_dumping",
      name: "Brine Dumping",
      machine: "liquid_dump",
      duration: 60,
      inputs: [
        {
          product: "brine",
          quantity: 60,
        },
      ],
      outputs: [],
    },
    brine_electrolysis: {
      id: "brine_electrolysis",
      name: "Brine Electrolysis",
      machine: "electrolyzer",
      duration: 60,
      inputs: [
        {
          product: "brine",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "chlorine",
          quantity: 24,
        },
      ],
    },
    brine_making: {
      id: "brine_making",
      name: "Brine Making",
      machine: "evaporation_pond",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 45,
        },
      ],
      outputs: [
        {
          product: "brine",
          quantity: 24,
        },
      ],
    },
    brine_making_2: {
      id: "brine_making_2",
      name: "Brine Making",
      machine: "evaporation_pond_heated",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 90,
        },
      ],
      outputs: [
        {
          product: "brine",
          quantity: 48,
        },
      ],
    },
    brine_production: {
      id: "brine_production",
      name: "Brine Production",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "salt",
          quantity: 24,
        },
        {
          product: "water",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "brine",
          quantity: 48,
        },
      ],
    },
    brine_storage: {
      id: "brine_storage",
      name: "Brine Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "brine",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "brine",
          quantity: 4320,
        },
      ],
    },
    brine_storage_2: {
      id: "brine_storage_2",
      name: "Brine Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "brine",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "brine",
          quantity: 2160,
        },
      ],
    },
    brine_storage_3: {
      id: "brine_storage_3",
      name: "Brine Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "brine",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "brine",
          quantity: 360,
        },
      ],
    },
    brine_storage_4: {
      id: "brine_storage_4",
      name: "Brine Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "brine",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "brine",
          quantity: 180,
        },
      ],
    },
    broken_glass_storage: {
      id: "broken_glass_storage",
      name: "Broken Glass Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "broken_glass",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "broken_glass",
          quantity: 4320,
        },
      ],
    },
    broken_glass_storage_2: {
      id: "broken_glass_storage_2",
      name: "Broken Glass Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "broken_glass",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "broken_glass",
          quantity: 2160,
        },
      ],
    },
    broken_glass_storage_3: {
      id: "broken_glass_storage_3",
      name: "Broken Glass Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "broken_glass",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "broken_glass",
          quantity: 360,
        },
      ],
    },
    broken_glass_storage_4: {
      id: "broken_glass_storage_4",
      name: "Broken Glass Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "broken_glass",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "broken_glass",
          quantity: 180,
        },
      ],
    },
    burning: {
      id: "burning",
      name: "Burning",
      machine: "burner_solid",
      duration: 60,
      inputs: [
        {
          product: "waste",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 18,
        },
      ],
    },
    burning_2: {
      id: "burning_2",
      name: "Burning",
      machine: "burner_solid",
      duration: 60,
      inputs: [
        {
          product: "biomass",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 12,
        },
      ],
    },
    burning_3: {
      id: "burning_3",
      name: "Burning",
      machine: "burner_solid",
      duration: 60,
      inputs: [
        {
          product: "animal_feed",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 12,
        },
      ],
    },
    burning_4: {
      id: "burning_4",
      name: "Burning",
      machine: "burner_solid",
      duration: 60,
      inputs: [
        {
          product: "meat_trimmings",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 9,
        },
      ],
    },
    burning_5: {
      id: "burning_5",
      name: "Burning",
      machine: "burner_solid",
      duration: 60,
      inputs: [
        {
          product: "chicken_carcass",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 9,
        },
      ],
    },
    burning_6: {
      id: "burning_6",
      name: "Burning",
      machine: "burner_solid",
      duration: 60,
      inputs: [
        {
          product: "sulfur",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 48,
        },
      ],
    },
    burning_7: {
      id: "burning_7",
      name: "Burning",
      machine: "burner_solid",
      duration: 60,
      inputs: [
        {
          product: "sludge",
          quantity: 18,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 18,
        },
      ],
    },
    cake_production: {
      id: "cake_production",
      name: "Cake Production",
      machine: "baking_unit",
      duration: 60,
      inputs: [
        {
          product: "flour",
          quantity: 10,
        },
        {
          product: "sugar",
          quantity: 4,
        },
        {
          product: "cooking_oil",
          quantity: 2,
        },
        {
          product: "eggs",
          quantity: 2,
        },
        {
          product: "fruit",
          quantity: 2,
        },
      ],
      outputs: [
        {
          product: "cake",
          quantity: 14,
        },
      ],
    },
    cake_storage: {
      id: "cake_storage",
      name: "Cake Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "cake",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "cake",
          quantity: 4320,
        },
      ],
    },
    cake_storage_2: {
      id: "cake_storage_2",
      name: "Cake Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "cake",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "cake",
          quantity: 2160,
        },
      ],
    },
    cake_storage_3: {
      id: "cake_storage_3",
      name: "Cake Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "cake",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "cake",
          quantity: 360,
        },
      ],
    },
    cake_storage_4: {
      id: "cake_storage_4",
      name: "Cake Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "cake",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "cake",
          quantity: 180,
        },
      ],
    },
    cake_storage_5: {
      id: "cake_storage_5",
      name: "Cake Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "cake",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "cake",
          quantity: 5000,
        },
      ],
    },
    canola_milling: {
      id: "canola_milling",
      name: "Canola Milling",
      machine: "mill",
      duration: 60,
      inputs: [
        {
          product: "canola",
          quantity: 16,
        },
      ],
      outputs: [
        {
          product: "cooking_oil",
          quantity: 12,
        },
        {
          product: "animal_feed",
          quantity: 4,
        },
      ],
    },
    canola_storage: {
      id: "canola_storage",
      name: "Canola Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "canola",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "canola",
          quantity: 4320,
        },
      ],
    },
    canola_storage_2: {
      id: "canola_storage_2",
      name: "Canola Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "canola",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "canola",
          quantity: 2160,
        },
      ],
    },
    canola_storage_3: {
      id: "canola_storage_3",
      name: "Canola Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "canola",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "canola",
          quantity: 360,
        },
      ],
    },
    canola_storage_4: {
      id: "canola_storage_4",
      name: "Canola Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "canola",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "canola",
          quantity: 180,
        },
      ],
    },
    carbon_dioxide_storage: {
      id: "carbon_dioxide_storage",
      name: "Carbon Dioxide Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "carbon_dioxide",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "carbon_dioxide",
          quantity: 4320,
        },
      ],
    },
    carbon_dioxide_storage_2: {
      id: "carbon_dioxide_storage_2",
      name: "Carbon Dioxide Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "carbon_dioxide",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "carbon_dioxide",
          quantity: 2160,
        },
      ],
    },
    carbon_dioxide_storage_3: {
      id: "carbon_dioxide_storage_3",
      name: "Carbon Dioxide Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "carbon_dioxide",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "carbon_dioxide",
          quantity: 360,
        },
      ],
    },
    carbon_dioxide_storage_4: {
      id: "carbon_dioxide_storage_4",
      name: "Carbon Dioxide Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "carbon_dioxide",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "carbon_dioxide",
          quantity: 180,
        },
      ],
    },
    cement_production: {
      id: "cement_production",
      name: "Cement Production",
      machine: "rotary_kiln",
      duration: 60,
      inputs: [
        {
          product: "limestone",
          quantity: 9,
        },
        {
          product: "coal",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "cement",
          quantity: 3,
        },
        {
          product: "exhaust",
          quantity: 9,
        },
      ],
    },
    cement_production_2: {
      id: "cement_production_2",
      name: "Cement Production",
      machine: "rotary_kiln_gas",
      duration: 60,
      inputs: [
        {
          product: "limestone",
          quantity: 18,
        },
        {
          product: "fuel_gas",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "cement",
          quantity: 6,
        },
        {
          product: "exhaust",
          quantity: 18,
        },
      ],
    },
    cement_production_3: {
      id: "cement_production_3",
      name: "Cement Production",
      machine: "rotary_kiln_gas",
      duration: 60,
      inputs: [
        {
          product: "limestone",
          quantity: 18,
        },
        {
          product: "hydrogen",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "cement",
          quantity: 6,
        },
        {
          product: "exhaust",
          quantity: 18,
        },
      ],
    },
    cement_storage: {
      id: "cement_storage",
      name: "Cement Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "cement",
          quantity: 4320,
        },
      ],
    },
    cement_storage_2: {
      id: "cement_storage_2",
      name: "Cement Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "cement",
          quantity: 2160,
        },
      ],
    },
    cement_storage_3: {
      id: "cement_storage_3",
      name: "Cement Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "cement",
          quantity: 360,
        },
      ],
    },
    cement_storage_4: {
      id: "cement_storage_4",
      name: "Cement Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "cement",
          quantity: 180,
        },
      ],
    },
    cement_storage_5: {
      id: "cement_storage_5",
      name: "Cement Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "cement",
          quantity: 5000,
        },
      ],
    },
    charcoal_making: {
      id: "charcoal_making",
      name: "Charcoal Making",
      machine: "coal_maker",
      duration: 60,
      inputs: [
        {
          product: "wood",
          quantity: 30,
        },
      ],
      outputs: [
        {
          product: "coal",
          quantity: 6,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    chicken_carcass_storage: {
      id: "chicken_carcass_storage",
      name: "Chicken Carcass Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "chicken_carcass",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "chicken_carcass",
          quantity: 4320,
        },
      ],
    },
    chicken_carcass_storage_2: {
      id: "chicken_carcass_storage_2",
      name: "Chicken Carcass Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "chicken_carcass",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "chicken_carcass",
          quantity: 2160,
        },
      ],
    },
    chicken_carcass_storage_3: {
      id: "chicken_carcass_storage_3",
      name: "Chicken Carcass Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "chicken_carcass",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "chicken_carcass",
          quantity: 360,
        },
      ],
    },
    chicken_carcass_storage_4: {
      id: "chicken_carcass_storage_4",
      name: "Chicken Carcass Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "chicken_carcass",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "chicken_carcass",
          quantity: 180,
        },
      ],
    },
    chicken_carcass_storage_5: {
      id: "chicken_carcass_storage_5",
      name: "Chicken Carcass Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "chicken_carcass",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "chicken_carcass",
          quantity: 5000,
        },
      ],
    },
    chilled_water_storage: {
      id: "chilled_water_storage",
      name: "Chilled Water Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "chilled_water",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "chilled_water",
          quantity: 4320,
        },
      ],
    },
    chilled_water_storage_2: {
      id: "chilled_water_storage_2",
      name: "Chilled Water Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "chilled_water",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "chilled_water",
          quantity: 2160,
        },
      ],
    },
    chilled_water_storage_3: {
      id: "chilled_water_storage_3",
      name: "Chilled Water Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "chilled_water",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "chilled_water",
          quantity: 360,
        },
      ],
    },
    chilled_water_storage_4: {
      id: "chilled_water_storage_4",
      name: "Chilled Water Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "chilled_water",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "chilled_water",
          quantity: 180,
        },
      ],
    },
    chlorine_storage: {
      id: "chlorine_storage",
      name: "Chlorine Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "chlorine",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "chlorine",
          quantity: 4320,
        },
      ],
    },
    chlorine_storage_2: {
      id: "chlorine_storage_2",
      name: "Chlorine Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "chlorine",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "chlorine",
          quantity: 2160,
        },
      ],
    },
    chlorine_storage_3: {
      id: "chlorine_storage_3",
      name: "Chlorine Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "chlorine",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "chlorine",
          quantity: 360,
        },
      ],
    },
    chlorine_storage_4: {
      id: "chlorine_storage_4",
      name: "Chlorine Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "chlorine",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "chlorine",
          quantity: 180,
        },
      ],
    },
    co2_injection: {
      id: "co2_injection",
      name: "Co2 Injection",
      machine: "gas_injection_pump",
      duration: 60,
      inputs: [
        {
          product: "carbon_dioxide",
          quantity: 72,
        },
        {
          product: "seawater",
          quantity: 24,
        },
      ],
      outputs: [],
    },
    coal_mining: {
      id: "coal_mining",
      name: "Coal Mining",
      machine: "coal_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "coal",
          quantity: 0,
        },
      ],
    },
    coal_storage: {
      id: "coal_storage",
      name: "Coal Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "coal",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "coal",
          quantity: 4320,
        },
      ],
    },
    coal_storage_2: {
      id: "coal_storage_2",
      name: "Coal Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "coal",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "coal",
          quantity: 2160,
        },
      ],
    },
    coal_storage_3: {
      id: "coal_storage_3",
      name: "Coal Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "coal",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "coal",
          quantity: 360,
        },
      ],
    },
    coal_storage_4: {
      id: "coal_storage_4",
      name: "Coal Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "coal",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "coal",
          quantity: 180,
        },
      ],
    },
    composing: {
      id: "composing",
      name: "Composing",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "animal_feed",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "compost",
          quantity: 3,
        },
      ],
    },
    composing_2: {
      id: "composing_2",
      name: "Composing",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "biomass",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "compost",
          quantity: 4,
        },
      ],
    },
    composing_3: {
      id: "composing_3",
      name: "Composing",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "meat_trimmings",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "compost",
          quantity: 2,
        },
      ],
    },
    compost_storage: {
      id: "compost_storage",
      name: "Compost Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "compost",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "compost",
          quantity: 4320,
        },
      ],
    },
    compost_storage_2: {
      id: "compost_storage_2",
      name: "Compost Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "compost",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "compost",
          quantity: 2160,
        },
      ],
    },
    compost_storage_3: {
      id: "compost_storage_3",
      name: "Compost Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "compost",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "compost",
          quantity: 360,
        },
      ],
    },
    compost_storage_4: {
      id: "compost_storage_4",
      name: "Compost Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "compost",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "compost",
          quantity: 180,
        },
      ],
    },
    concrete_mixing: {
      id: "concrete_mixing",
      name: "Concrete Mixing",
      machine: "concrete_mixer",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 1.5,
        },
        {
          product: "sand",
          quantity: 3,
        },
        {
          product: "slag_crushed",
          quantity: 9,
        },
        {
          product: "water",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 12,
        },
      ],
    },
    concrete_mixing_2: {
      id: "concrete_mixing_2",
      name: "Concrete Mixing",
      machine: "concrete_mixer",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 1.5,
        },
        {
          product: "sand",
          quantity: 3,
        },
        {
          product: "gravel",
          quantity: 9,
        },
        {
          product: "water",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 12,
        },
      ],
    },
    concrete_mixing_3: {
      id: "concrete_mixing_3",
      name: "Concrete Mixing",
      machine: "concrete_mixer",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 3,
        },
        {
          product: "slag_crushed",
          quantity: 1.5,
        },
        {
          product: "water",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 6,
        },
      ],
    },
    concrete_mixing_4: {
      id: "concrete_mixing_4",
      name: "Concrete Mixing",
      machine: "concrete_mixer",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 3,
        },
        {
          product: "gravel",
          quantity: 1.5,
        },
        {
          product: "water",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 6,
        },
      ],
    },
    concrete_mixing_5: {
      id: "concrete_mixing_5",
      name: "Concrete Mixing",
      machine: "concrete_mixer_ii",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 3,
        },
        {
          product: "sand",
          quantity: 6,
        },
        {
          product: "slag_crushed",
          quantity: 18,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 24,
        },
      ],
    },
    concrete_mixing_6: {
      id: "concrete_mixing_6",
      name: "Concrete Mixing",
      machine: "concrete_mixer_ii",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 3,
        },
        {
          product: "sand",
          quantity: 6,
        },
        {
          product: "gravel",
          quantity: 18,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 24,
        },
      ],
    },
    concrete_mixing_7: {
      id: "concrete_mixing_7",
      name: "Concrete Mixing",
      machine: "concrete_mixer_iii",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 6,
        },
        {
          product: "sand",
          quantity: 12,
        },
        {
          product: "slag_crushed",
          quantity: 36,
        },
        {
          product: "water",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 48,
        },
      ],
    },
    concrete_mixing_8: {
      id: "concrete_mixing_8",
      name: "Concrete Mixing",
      machine: "concrete_mixer_iii",
      duration: 60,
      inputs: [
        {
          product: "cement",
          quantity: 6,
        },
        {
          product: "sand",
          quantity: 12,
        },
        {
          product: "gravel",
          quantity: 36,
        },
        {
          product: "water",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 48,
        },
      ],
    },
    concrete_slab_storage: {
      id: "concrete_slab_storage",
      name: "Concrete Slab Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "concrete_slab",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 4320,
        },
      ],
    },
    concrete_slab_storage_2: {
      id: "concrete_slab_storage_2",
      name: "Concrete Slab Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "concrete_slab",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 2160,
        },
      ],
    },
    concrete_slab_storage_3: {
      id: "concrete_slab_storage_3",
      name: "Concrete Slab Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "concrete_slab",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 360,
        },
      ],
    },
    concrete_slab_storage_4: {
      id: "concrete_slab_storage_4",
      name: "Concrete Slab Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "concrete_slab",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 180,
        },
      ],
    },
    concrete_slab_storage_5: {
      id: "concrete_slab_storage_5",
      name: "Concrete Slab Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "concrete_slab",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "concrete_slab",
          quantity: 5000,
        },
      ],
    },
    construction_parts_ii_storage: {
      id: "construction_parts_ii_storage",
      name: "Construction Parts II Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_ii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 4320,
        },
      ],
    },
    construction_parts_ii_storage_2: {
      id: "construction_parts_ii_storage_2",
      name: "Construction Parts II Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_ii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 2160,
        },
      ],
    },
    construction_parts_ii_storage_3: {
      id: "construction_parts_ii_storage_3",
      name: "Construction Parts II Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_ii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 360,
        },
      ],
    },
    construction_parts_ii_storage_4: {
      id: "construction_parts_ii_storage_4",
      name: "Construction Parts II Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_ii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 180,
        },
      ],
    },
    construction_parts_ii_storage_5: {
      id: "construction_parts_ii_storage_5",
      name: "Construction Parts II Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_ii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 5000,
        },
      ],
    },
    construction_parts_iii_storage: {
      id: "construction_parts_iii_storage",
      name: "Construction Parts III Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iii",
          quantity: 4320,
        },
      ],
    },
    construction_parts_iii_storage_2: {
      id: "construction_parts_iii_storage_2",
      name: "Construction Parts III Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iii",
          quantity: 2160,
        },
      ],
    },
    construction_parts_iii_storage_3: {
      id: "construction_parts_iii_storage_3",
      name: "Construction Parts III Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iii",
          quantity: 360,
        },
      ],
    },
    construction_parts_iii_storage_4: {
      id: "construction_parts_iii_storage_4",
      name: "Construction Parts III Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iii",
          quantity: 180,
        },
      ],
    },
    construction_parts_iii_storage_5: {
      id: "construction_parts_iii_storage_5",
      name: "Construction Parts III Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iii",
          quantity: 5000,
        },
      ],
    },
    construction_parts_iv_storage: {
      id: "construction_parts_iv_storage",
      name: "Construction Parts IV Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iv",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iv",
          quantity: 4320,
        },
      ],
    },
    construction_parts_iv_storage_2: {
      id: "construction_parts_iv_storage_2",
      name: "Construction Parts IV Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iv",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iv",
          quantity: 2160,
        },
      ],
    },
    construction_parts_iv_storage_3: {
      id: "construction_parts_iv_storage_3",
      name: "Construction Parts IV Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iv",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iv",
          quantity: 360,
        },
      ],
    },
    construction_parts_iv_storage_4: {
      id: "construction_parts_iv_storage_4",
      name: "Construction Parts IV Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iv",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iv",
          quantity: 180,
        },
      ],
    },
    construction_parts_iv_storage_5: {
      id: "construction_parts_iv_storage_5",
      name: "Construction Parts IV Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iv",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iv",
          quantity: 5000,
        },
      ],
    },
    construction_parts_storage: {
      id: "construction_parts_storage",
      name: "Construction Parts Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 4320,
        },
      ],
    },
    construction_parts_storage_2: {
      id: "construction_parts_storage_2",
      name: "Construction Parts Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 2160,
        },
      ],
    },
    construction_parts_storage_3: {
      id: "construction_parts_storage_3",
      name: "Construction Parts Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 360,
        },
      ],
    },
    construction_parts_storage_4: {
      id: "construction_parts_storage_4",
      name: "Construction Parts Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 180,
        },
      ],
    },
    construction_parts_storage_5: {
      id: "construction_parts_storage_5",
      name: "Construction Parts Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 5000,
        },
      ],
    },
    consumer_electronics_assembly_t1: {
      id: "consumer_electronics_assembly_t1",
      name: "Consumer Electronics Assembly (T1)",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "electronics_iii",
          quantity: 2,
        },
        {
          product: "plastic",
          quantity: 2,
        },
        {
          product: "steel",
          quantity: 2,
        },
      ],
      outputs: [
        {
          product: "consumer_electronics",
          quantity: 4,
        },
      ],
    },
    consumer_electronics_storage: {
      id: "consumer_electronics_storage",
      name: "Consumer Electronics Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "consumer_electronics",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "consumer_electronics",
          quantity: 4320,
        },
      ],
    },
    consumer_electronics_storage_2: {
      id: "consumer_electronics_storage_2",
      name: "Consumer Electronics Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "consumer_electronics",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "consumer_electronics",
          quantity: 2160,
        },
      ],
    },
    consumer_electronics_storage_3: {
      id: "consumer_electronics_storage_3",
      name: "Consumer Electronics Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "consumer_electronics",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "consumer_electronics",
          quantity: 360,
        },
      ],
    },
    consumer_electronics_storage_4: {
      id: "consumer_electronics_storage_4",
      name: "Consumer Electronics Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "consumer_electronics",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "consumer_electronics",
          quantity: 180,
        },
      ],
    },
    consumer_electronics_storage_5: {
      id: "consumer_electronics_storage_5",
      name: "Consumer Electronics Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "consumer_electronics",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "consumer_electronics",
          quantity: 5000,
        },
      ],
    },
    cooking_oil_storage: {
      id: "cooking_oil_storage",
      name: "Cooking Oil Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "cooking_oil",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "cooking_oil",
          quantity: 4320,
        },
      ],
    },
    cooking_oil_storage_2: {
      id: "cooking_oil_storage_2",
      name: "Cooking Oil Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "cooking_oil",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "cooking_oil",
          quantity: 2160,
        },
      ],
    },
    cooking_oil_storage_3: {
      id: "cooking_oil_storage_3",
      name: "Cooking Oil Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "cooking_oil",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "cooking_oil",
          quantity: 360,
        },
      ],
    },
    cooking_oil_storage_4: {
      id: "cooking_oil_storage_4",
      name: "Cooking Oil Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "cooking_oil",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "cooking_oil",
          quantity: 180,
        },
      ],
    },
    copper_casting: {
      id: "copper_casting",
      name: "Copper Casting",
      machine: "metal_caster",
      duration: 60,
      inputs: [
        {
          product: "molten_copper",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "impure_copper",
          quantity: 12,
        },
      ],
    },
    copper_casting_2: {
      id: "copper_casting_2",
      name: "Copper Casting",
      machine: "metal_caster_ii",
      duration: 60,
      inputs: [
        {
          product: "molten_copper",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "impure_copper",
          quantity: 24,
        },
      ],
    },
    copper_mining: {
      id: "copper_mining",
      name: "Copper Mining",
      machine: "copper_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "copper_ore",
          quantity: 0,
        },
      ],
    },
    copper_ore_crushed_storage: {
      id: "copper_ore_crushed_storage",
      name: "Copper Ore Crushed Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "copper_ore_crushed",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "copper_ore_crushed",
          quantity: 4320,
        },
      ],
    },
    copper_ore_crushed_storage_2: {
      id: "copper_ore_crushed_storage_2",
      name: "Copper Ore Crushed Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "copper_ore_crushed",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "copper_ore_crushed",
          quantity: 2160,
        },
      ],
    },
    copper_ore_crushed_storage_3: {
      id: "copper_ore_crushed_storage_3",
      name: "Copper Ore Crushed Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "copper_ore_crushed",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "copper_ore_crushed",
          quantity: 360,
        },
      ],
    },
    copper_ore_crushed_storage_4: {
      id: "copper_ore_crushed_storage_4",
      name: "Copper Ore Crushed Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "copper_ore_crushed",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "copper_ore_crushed",
          quantity: 180,
        },
      ],
    },
    copper_ore_crushing: {
      id: "copper_ore_crushing",
      name: "Copper Ore Crushing",
      machine: "crusher",
      duration: 60,
      inputs: [
        {
          product: "copper_ore",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "copper_ore_crushed",
          quantity: 36,
        },
      ],
    },
    copper_ore_storage: {
      id: "copper_ore_storage",
      name: "Copper Ore Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "copper_ore",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "copper_ore",
          quantity: 4320,
        },
      ],
    },
    copper_ore_storage_2: {
      id: "copper_ore_storage_2",
      name: "Copper Ore Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "copper_ore",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "copper_ore",
          quantity: 2160,
        },
      ],
    },
    copper_ore_storage_3: {
      id: "copper_ore_storage_3",
      name: "Copper Ore Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "copper_ore",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "copper_ore",
          quantity: 360,
        },
      ],
    },
    copper_ore_storage_4: {
      id: "copper_ore_storage_4",
      name: "Copper Ore Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "copper_ore",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "copper_ore",
          quantity: 180,
        },
      ],
    },
    copper_purification_acid: {
      id: "copper_purification_acid",
      name: "Copper Purification (Acid)",
      machine: "copper_electrolysis",
      duration: 60,
      inputs: [
        {
          product: "impure_copper",
          quantity: 24,
        },
        {
          product: "acid",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "copper",
          quantity: 24,
        },
      ],
    },
    copper_purification_water: {
      id: "copper_purification_water",
      name: "Copper Purification (Water)",
      machine: "copper_electrolysis",
      duration: 60,
      inputs: [
        {
          product: "impure_copper",
          quantity: 24,
        },
        {
          product: "water",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "copper",
          quantity: 19.5,
        },
      ],
    },
    copper_scrap_smelting: {
      id: "copper_scrap_smelting",
      name: "Copper Scrap Smelting",
      machine: "blast_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "copper_scrap",
          quantity: 48,
        },
        {
          product: "coal",
          quantity: 15,
        },
      ],
      outputs: [
        {
          product: "molten_copper",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 30,
        },
      ],
    },
    copper_scrap_smelting_2: {
      id: "copper_scrap_smelting_2",
      name: "Copper Scrap Smelting",
      machine: "blast_furnace",
      duration: 60,
      inputs: [
        {
          product: "copper_scrap",
          quantity: 24,
        },
        {
          product: "coal",
          quantity: 9,
        },
      ],
      outputs: [
        {
          product: "molten_copper",
          quantity: 24,
        },
        {
          product: "exhaust",
          quantity: 18,
        },
      ],
    },
    copper_scrap_smelting_arc: {
      id: "copper_scrap_smelting_arc",
      name: "Copper Scrap Smelting (Arc)",
      machine: "arc_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "copper_scrap",
          quantity: 48,
        },
        {
          product: "graphite",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "molten_copper",
          quantity: 48,
        },
        {
          product: "steam_lo",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 6,
        },
      ],
    },
    copper_scrap_storage: {
      id: "copper_scrap_storage",
      name: "Copper Scrap Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "copper_scrap",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "copper_scrap",
          quantity: 4320,
        },
      ],
    },
    copper_scrap_storage_2: {
      id: "copper_scrap_storage_2",
      name: "Copper Scrap Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "copper_scrap",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "copper_scrap",
          quantity: 2160,
        },
      ],
    },
    copper_scrap_storage_3: {
      id: "copper_scrap_storage_3",
      name: "Copper Scrap Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "copper_scrap",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "copper_scrap",
          quantity: 360,
        },
      ],
    },
    copper_scrap_storage_4: {
      id: "copper_scrap_storage_4",
      name: "Copper Scrap Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "copper_scrap",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "copper_scrap",
          quantity: 180,
        },
      ],
    },
    copper_smelting: {
      id: "copper_smelting",
      name: "Copper Smelting",
      machine: "blast_furnace",
      duration: 60,
      inputs: [
        {
          product: "copper_ore",
          quantity: 24,
        },
        {
          product: "coal",
          quantity: 9,
        },
      ],
      outputs: [
        {
          product: "molten_copper",
          quantity: 24,
        },
        {
          product: "slag",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    copper_smelting_arc: {
      id: "copper_smelting_arc",
      name: "Copper Smelting (Arc)",
      machine: "arc_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "copper_ore_crushed",
          quantity: 36,
        },
        {
          product: "sand",
          quantity: 6,
        },
        {
          product: "graphite",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "molten_copper",
          quantity: 48,
        },
        {
          product: "slag",
          quantity: 18,
        },
        {
          product: "steam_lo",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 12,
        },
      ],
    },
    copper_smelting_sand: {
      id: "copper_smelting_sand",
      name: "Copper Smelting (Sand)",
      machine: "blast_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "copper_ore_crushed",
          quantity: 36,
        },
        {
          product: "sand",
          quantity: 6,
        },
        {
          product: "coal",
          quantity: 15,
        },
      ],
      outputs: [
        {
          product: "molten_copper",
          quantity: 48,
        },
        {
          product: "slag",
          quantity: 18,
        },
        {
          product: "exhaust",
          quantity: 36,
        },
      ],
    },
    copper_storage: {
      id: "copper_storage",
      name: "Copper Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "copper",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "copper",
          quantity: 4320,
        },
      ],
    },
    copper_storage_2: {
      id: "copper_storage_2",
      name: "Copper Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "copper",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "copper",
          quantity: 2160,
        },
      ],
    },
    copper_storage_3: {
      id: "copper_storage_3",
      name: "Copper Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "copper",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "copper",
          quantity: 360,
        },
      ],
    },
    copper_storage_4: {
      id: "copper_storage_4",
      name: "Copper Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "copper",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "copper",
          quantity: 180,
        },
      ],
    },
    copper_storage_5: {
      id: "copper_storage_5",
      name: "Copper Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "copper",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "copper",
          quantity: 5000,
        },
      ],
    },
    corn_mash_storage: {
      id: "corn_mash_storage",
      name: "Corn Mash Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "corn_mash",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "corn_mash",
          quantity: 4320,
        },
      ],
    },
    corn_mash_storage_2: {
      id: "corn_mash_storage_2",
      name: "Corn Mash Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "corn_mash",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "corn_mash",
          quantity: 2160,
        },
      ],
    },
    corn_mash_storage_3: {
      id: "corn_mash_storage_3",
      name: "Corn Mash Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "corn_mash",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "corn_mash",
          quantity: 360,
        },
      ],
    },
    corn_mash_storage_4: {
      id: "corn_mash_storage_4",
      name: "Corn Mash Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "corn_mash",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "corn_mash",
          quantity: 180,
        },
      ],
    },
    corn_milling_wet: {
      id: "corn_milling_wet",
      name: "Corn Milling (Wet)",
      machine: "mill",
      duration: 60,
      inputs: [
        {
          product: "corn",
          quantity: 12,
        },
        {
          product: "water",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "corn_mash",
          quantity: 9,
        },
        {
          product: "animal_feed",
          quantity: 3,
        },
      ],
    },
    corn_storage: {
      id: "corn_storage",
      name: "Corn Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "corn",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "corn",
          quantity: 4320,
        },
      ],
    },
    corn_storage_2: {
      id: "corn_storage_2",
      name: "Corn Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "corn",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "corn",
          quantity: 2160,
        },
      ],
    },
    corn_storage_3: {
      id: "corn_storage_3",
      name: "Corn Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "corn",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "corn",
          quantity: 360,
        },
      ],
    },
    corn_storage_4: {
      id: "corn_storage_4",
      name: "Corn Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "corn",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "corn",
          quantity: 180,
        },
      ],
    },
    cp2_assembly_t1: {
      id: "cp2_assembly_t1",
      name: "CP2 Assembly (T1)",
      machine: "assembly_manual",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 6,
        },
        {
          product: "electronics",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 3,
        },
      ],
    },
    cp2_assembly_t1_2: {
      id: "cp2_assembly_t1_2",
      name: "CP2 Assembly (T1)",
      machine: "assembly_electric",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 12,
        },
        {
          product: "electronics",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 6,
        },
      ],
    },
    cp2_assembly_t2: {
      id: "cp2_assembly_t2",
      name: "CP2 Assembly (T2)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 24,
        },
        {
          product: "electronics",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 12,
        },
      ],
    },
    cp2_assembly_t3: {
      id: "cp2_assembly_t3",
      name: "CP2 Assembly (T3)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "construction_parts",
          quantity: 48,
        },
        {
          product: "electronics",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "construction_parts_ii",
          quantity: 24,
        },
      ],
    },
    cp3_assembly_t1: {
      id: "cp3_assembly_t1",
      name: "CP3 Assembly (T1)",
      machine: "assembly_electric",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_ii",
          quantity: 6,
        },
        {
          product: "steel",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iii",
          quantity: 3,
        },
      ],
    },
    cp3_assembly_t2: {
      id: "cp3_assembly_t2",
      name: "CP3 Assembly (T2)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_ii",
          quantity: 12,
        },
        {
          product: "steel",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iii",
          quantity: 6,
        },
      ],
    },
    cp3_assembly_t3: {
      id: "cp3_assembly_t3",
      name: "CP3 Assembly (T3)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_ii",
          quantity: 24,
        },
        {
          product: "steel",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iii",
          quantity: 12,
        },
      ],
    },
    cp4_assembly_t1: {
      id: "cp4_assembly_t1",
      name: "CP4 Assembly (T1)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iii",
          quantity: 4,
        },
        {
          product: "electronics_ii",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iv",
          quantity: 2,
        },
      ],
    },
    cp4_assembly_t2: {
      id: "cp4_assembly_t2",
      name: "CP4 Assembly (T2)",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "construction_parts_iii",
          quantity: 6,
        },
        {
          product: "electronics_ii",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "construction_parts_iv",
          quantity: 3,
        },
      ],
    },
    cp_assembly_t1: {
      id: "cp_assembly_t1",
      name: "CP Assembly (T1)",
      machine: "assembly_manual",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 4.5,
        },
        {
          product: "wood",
          quantity: 6,
        },
        {
          product: "concrete_slab",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 6,
        },
      ],
    },
    cp_assembly_t2: {
      id: "cp_assembly_t2",
      name: "CP Assembly (T2)",
      machine: "assembly_electric",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 9,
        },
        {
          product: "wood",
          quantity: 12,
        },
        {
          product: "concrete_slab",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 12,
        },
      ],
    },
    cp_assembly_t3: {
      id: "cp_assembly_t3",
      name: "CP Assembly (T3)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 18,
        },
        {
          product: "wood",
          quantity: 24,
        },
        {
          product: "concrete_slab",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 24,
        },
      ],
    },
    cp_assembly_t3_2: {
      id: "cp_assembly_t3_2",
      name: "CP Assembly (T3)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 36,
        },
        {
          product: "wood",
          quantity: 48,
        },
        {
          product: "concrete_slab",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "construction_parts",
          quantity: 48,
        },
      ],
    },
    create_computing_power: {
      id: "create_computing_power",
      name: "Create Computing Power",
      machine: "basic_rack",
      duration: 60,
      inputs: [
        {
          product: "chilled_water",
          quantity: 0.5,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 0.5,
        },
      ],
    },
    crude_oil_refining: {
      id: "crude_oil_refining",
      name: "Crude Oil Refining",
      machine: "distillation_stage_i",
      duration: 60,
      inputs: [
        {
          product: "crude_oil",
          quantity: 54,
        },
        {
          product: "steam_hi",
          quantity: 9,
        },
      ],
      outputs: [
        {
          product: "medium_oil",
          quantity: 48,
        },
        {
          product: "heavy_oil",
          quantity: 6,
        },
        {
          product: "sour_water",
          quantity: 18,
        },
      ],
    },
    crude_oil_refining_2: {
      id: "crude_oil_refining_2",
      name: "Crude Oil Refining",
      machine: "distillation_stage_ii",
      duration: 60,
      inputs: [
        {
          product: "medium_oil",
          quantity: 48,
        },
        {
          product: "steam_hi",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 36,
        },
        {
          product: "light_oil",
          quantity: 12,
        },
      ],
    },
    crude_oil_storage: {
      id: "crude_oil_storage",
      name: "Crude Oil Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "crude_oil",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "crude_oil",
          quantity: 4320,
        },
      ],
    },
    crude_oil_storage_2: {
      id: "crude_oil_storage_2",
      name: "Crude Oil Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "crude_oil",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "crude_oil",
          quantity: 2160,
        },
      ],
    },
    crude_oil_storage_3: {
      id: "crude_oil_storage_3",
      name: "Crude Oil Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "crude_oil",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "crude_oil",
          quantity: 360,
        },
      ],
    },
    crude_oil_storage_4: {
      id: "crude_oil_storage_4",
      name: "Crude Oil Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "crude_oil",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "crude_oil",
          quantity: 180,
        },
      ],
    },
    depleted_steam_condensation: {
      id: "depleted_steam_condensation",
      name: "Depleted Steam Condensation",
      machine: "cooling_tower",
      duration: 60,
      inputs: [
        {
          product: "steam_depleted",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 12,
        },
      ],
    },
    depleted_steam_condensation_2: {
      id: "depleted_steam_condensation_2",
      name: "Depleted Steam Condensation",
      machine: "cooling_tower_large",
      duration: 60,
      inputs: [
        {
          product: "steam_depleted",
          quantity: 96,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 72,
        },
      ],
    },
    diesel_disposal: {
      id: "diesel_disposal",
      name: "Diesel Disposal",
      machine: "flare",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 30,
        },
      ],
    },
    diesel_distillation_basic: {
      id: "diesel_distillation_basic",
      name: "Diesel Distillation (Basic)",
      machine: "basic_distiller",
      duration: 60,
      inputs: [
        {
          product: "crude_oil",
          quantity: 54,
        },
        {
          product: "coal",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 24,
        },
        {
          product: "waste_water",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 36,
        },
      ],
    },
    diesel_reforming: {
      id: "diesel_reforming",
      name: "Diesel Reforming",
      machine: "cracking_unit",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 24,
        },
        {
          product: "steam_hi",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "naphtha",
          quantity: 18,
        },
        {
          product: "sour_water",
          quantity: 3,
        },
      ],
    },
    diesel_storage: {
      id: "diesel_storage",
      name: "Diesel Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 4320,
        },
      ],
    },
    diesel_storage_2: {
      id: "diesel_storage_2",
      name: "Diesel Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 2160,
        },
      ],
    },
    diesel_storage_3: {
      id: "diesel_storage_3",
      name: "Diesel Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 360,
        },
      ],
    },
    diesel_storage_4: {
      id: "diesel_storage_4",
      name: "Diesel Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 180,
        },
      ],
    },
    dieselgenerator: {
      id: "dieselgenerator",
      name: "DieselGenerator",
      machine: "diesel_generator",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "electricity",
          quantity: 540,
        },
        {
          product: "air_pollution",
          quantity: 3,
        },
      ],
    },
    digestion: {
      id: "digestion",
      name: "Digestion",
      machine: "anaerobic_digester",
      duration: 60,
      inputs: [
        {
          product: "sludge",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 5,
        },
        {
          product: "compost",
          quantity: 1,
        },
      ],
    },
    digestion_2: {
      id: "digestion_2",
      name: "Digestion",
      machine: "anaerobic_digester",
      duration: 60,
      inputs: [
        {
          product: "potato",
          quantity: 14,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 5,
        },
        {
          product: "compost",
          quantity: 1,
        },
      ],
    },
    digestion_3: {
      id: "digestion_3",
      name: "Digestion",
      machine: "anaerobic_digester",
      duration: 60,
      inputs: [
        {
          product: "wheat",
          quantity: 7.333333333333333,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 6,
        },
        {
          product: "compost",
          quantity: 0.6666666666666666,
        },
      ],
    },
    digestion_4: {
      id: "digestion_4",
      name: "Digestion",
      machine: "anaerobic_digester",
      duration: 60,
      inputs: [
        {
          product: "meat_trimmings",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 2,
        },
        {
          product: "compost",
          quantity: 1,
        },
      ],
    },
    dirt_mining: {
      id: "dirt_mining",
      name: "Dirt Mining",
      machine: "dirt_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "dirt",
          quantity: 0,
        },
      ],
    },
    dirt_storage: {
      id: "dirt_storage",
      name: "Dirt Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "dirt",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "dirt",
          quantity: 4320,
        },
      ],
    },
    dirt_storage_2: {
      id: "dirt_storage_2",
      name: "Dirt Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "dirt",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "dirt",
          quantity: 2160,
        },
      ],
    },
    dirt_storage_3: {
      id: "dirt_storage_3",
      name: "Dirt Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "dirt",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "dirt",
          quantity: 360,
        },
      ],
    },
    dirt_storage_4: {
      id: "dirt_storage_4",
      name: "Dirt Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "dirt",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "dirt",
          quantity: 180,
        },
      ],
    },
    disinfectant_production: {
      id: "disinfectant_production",
      name: "Disinfectant Production",
      machine: "chemical_plant",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 4.5,
        },
        {
          product: "plastic",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "disinfectant",
          quantity: 12,
        },
      ],
    },
    disinfectant_production_2: {
      id: "disinfectant_production_2",
      name: "Disinfectant Production",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 9,
        },
        {
          product: "plastic",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "disinfectant",
          quantity: 24,
        },
      ],
    },
    disinfectant_storage: {
      id: "disinfectant_storage",
      name: "Disinfectant Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "disinfectant",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "disinfectant",
          quantity: 4320,
        },
      ],
    },
    disinfectant_storage_2: {
      id: "disinfectant_storage_2",
      name: "Disinfectant Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "disinfectant",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "disinfectant",
          quantity: 2160,
        },
      ],
    },
    disinfectant_storage_3: {
      id: "disinfectant_storage_3",
      name: "Disinfectant Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "disinfectant",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "disinfectant",
          quantity: 360,
        },
      ],
    },
    disinfectant_storage_4: {
      id: "disinfectant_storage_4",
      name: "Disinfectant Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "disinfectant",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "disinfectant",
          quantity: 180,
        },
      ],
    },
    disinfectant_storage_5: {
      id: "disinfectant_storage_5",
      name: "Disinfectant Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "disinfectant",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "disinfectant",
          quantity: 5000,
        },
      ],
    },
    eggs_storage: {
      id: "eggs_storage",
      name: "Eggs Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "eggs",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "eggs",
          quantity: 4320,
        },
      ],
    },
    eggs_storage_2: {
      id: "eggs_storage_2",
      name: "Eggs Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "eggs",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "eggs",
          quantity: 2160,
        },
      ],
    },
    eggs_storage_3: {
      id: "eggs_storage_3",
      name: "Eggs Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "eggs",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "eggs",
          quantity: 360,
        },
      ],
    },
    eggs_storage_4: {
      id: "eggs_storage_4",
      name: "Eggs Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "eggs",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "eggs",
          quantity: 180,
        },
      ],
    },
    eggs_storage_5: {
      id: "eggs_storage_5",
      name: "Eggs Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "eggs",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "eggs",
          quantity: 5000,
        },
      ],
    },
    electronics_2_assembly_t1: {
      id: "electronics_2_assembly_t1",
      name: "Electronics 2 Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "pcb",
          quantity: 3,
        },
        {
          product: "electronics",
          quantity: 6,
        },
        {
          product: "silicon_poly",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "electronics_ii",
          quantity: 3,
        },
      ],
    },
    electronics_2_assembly_t2: {
      id: "electronics_2_assembly_t2",
      name: "Electronics 2 Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "pcb",
          quantity: 6,
        },
        {
          product: "electronics",
          quantity: 12,
        },
        {
          product: "silicon_poly",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "electronics_ii",
          quantity: 6,
        },
      ],
    },
    electronics_2_assembly_t3: {
      id: "electronics_2_assembly_t3",
      name: "Electronics 2 Assembly (T3)",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "pcb",
          quantity: 12,
        },
        {
          product: "electronics",
          quantity: 24,
        },
        {
          product: "silicon_poly",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "electronics_ii",
          quantity: 12,
        },
      ],
    },
    electronics_3_assembly_t1: {
      id: "electronics_3_assembly_t1",
      name: "Electronics 3 Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips",
          quantity: 1.5,
        },
        {
          product: "electronics_ii",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "electronics_iii",
          quantity: 1.5,
        },
      ],
    },
    electronics_3_assembly_t2: {
      id: "electronics_3_assembly_t2",
      name: "Electronics 3 Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "microchips",
          quantity: 3,
        },
        {
          product: "electronics_ii",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "electronics_iii",
          quantity: 3,
        },
      ],
    },
    electronics_3_assembly_t3: {
      id: "electronics_3_assembly_t3",
      name: "Electronics 3 Assembly (T3)",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips",
          quantity: 6,
        },
        {
          product: "electronics_ii",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "electronics_iii",
          quantity: 6,
        },
      ],
    },
    electronics_assembly_t1: {
      id: "electronics_assembly_t1",
      name: "Electronics Assembly (T1)",
      machine: "assembly_manual",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 1,
        },
        {
          product: "copper",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 4,
        },
      ],
    },
    electronics_assembly_t2: {
      id: "electronics_assembly_t2",
      name: "Electronics Assembly (T2)",
      machine: "assembly_electric",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 3,
        },
        {
          product: "copper",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 12,
        },
      ],
    },
    electronics_assembly_t3: {
      id: "electronics_assembly_t3",
      name: "Electronics Assembly (T3)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 6,
        },
        {
          product: "copper",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 24,
        },
      ],
    },
    electronics_assembly_t4: {
      id: "electronics_assembly_t4",
      name: "Electronics Assembly (T4)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 12,
        },
        {
          product: "copper",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 48,
        },
      ],
    },
    electronics_assembly_t5: {
      id: "electronics_assembly_t5",
      name: "Electronics Assembly (T5)",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 24,
        },
        {
          product: "copper",
          quantity: 96,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 96,
        },
      ],
    },
    electronics_ii_storage: {
      id: "electronics_ii_storage",
      name: "Electronics II Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "electronics_ii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "electronics_ii",
          quantity: 4320,
        },
      ],
    },
    electronics_ii_storage_2: {
      id: "electronics_ii_storage_2",
      name: "Electronics II Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "electronics_ii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "electronics_ii",
          quantity: 2160,
        },
      ],
    },
    electronics_ii_storage_3: {
      id: "electronics_ii_storage_3",
      name: "Electronics II Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "electronics_ii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "electronics_ii",
          quantity: 360,
        },
      ],
    },
    electronics_ii_storage_4: {
      id: "electronics_ii_storage_4",
      name: "Electronics II Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "electronics_ii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "electronics_ii",
          quantity: 180,
        },
      ],
    },
    electronics_ii_storage_5: {
      id: "electronics_ii_storage_5",
      name: "Electronics II Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "electronics_ii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "electronics_ii",
          quantity: 5000,
        },
      ],
    },
    electronics_iii_storage: {
      id: "electronics_iii_storage",
      name: "Electronics III Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "electronics_iii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "electronics_iii",
          quantity: 4320,
        },
      ],
    },
    electronics_iii_storage_2: {
      id: "electronics_iii_storage_2",
      name: "Electronics III Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "electronics_iii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "electronics_iii",
          quantity: 2160,
        },
      ],
    },
    electronics_iii_storage_3: {
      id: "electronics_iii_storage_3",
      name: "Electronics III Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "electronics_iii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "electronics_iii",
          quantity: 360,
        },
      ],
    },
    electronics_iii_storage_4: {
      id: "electronics_iii_storage_4",
      name: "Electronics III Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "electronics_iii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "electronics_iii",
          quantity: 180,
        },
      ],
    },
    electronics_iii_storage_5: {
      id: "electronics_iii_storage_5",
      name: "Electronics III Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "electronics_iii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "electronics_iii",
          quantity: 5000,
        },
      ],
    },
    electronics_storage: {
      id: "electronics_storage",
      name: "Electronics Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "electronics",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 4320,
        },
      ],
    },
    electronics_storage_2: {
      id: "electronics_storage_2",
      name: "Electronics Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "electronics",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 2160,
        },
      ],
    },
    electronics_storage_3: {
      id: "electronics_storage_3",
      name: "Electronics Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "electronics",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 360,
        },
      ],
    },
    electronics_storage_4: {
      id: "electronics_storage_4",
      name: "Electronics Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "electronics",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 180,
        },
      ],
    },
    electronics_storage_5: {
      id: "electronics_storage_5",
      name: "Electronics Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "electronics",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "electronics",
          quantity: 5000,
        },
      ],
    },
    ethanol_disposal: {
      id: "ethanol_disposal",
      name: "Ethanol Disposal",
      machine: "flare",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 12,
        },
      ],
    },
    ethanol_making_corn: {
      id: "ethanol_making_corn",
      name: "Ethanol Making (Corn)",
      machine: "fermentation_tank",
      duration: 60,
      inputs: [
        {
          product: "corn_mash",
          quantity: 9,
        },
        {
          product: "oxygen",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "ethanol",
          quantity: 4.5,
        },
        {
          product: "carbon_dioxide",
          quantity: 9,
        },
      ],
    },
    ethanol_making_sugar: {
      id: "ethanol_making_sugar",
      name: "Ethanol Making (Sugar)",
      machine: "fermentation_tank",
      duration: 60,
      inputs: [
        {
          product: "sugar",
          quantity: 12,
        },
        {
          product: "oxygen",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "ethanol",
          quantity: 6,
        },
        {
          product: "carbon_dioxide",
          quantity: 12,
        },
      ],
    },
    ethanol_storage: {
      id: "ethanol_storage",
      name: "Ethanol Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "ethanol",
          quantity: 4320,
        },
      ],
    },
    ethanol_storage_2: {
      id: "ethanol_storage_2",
      name: "Ethanol Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "ethanol",
          quantity: 2160,
        },
      ],
    },
    ethanol_storage_3: {
      id: "ethanol_storage_3",
      name: "Ethanol Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "ethanol",
          quantity: 360,
        },
      ],
    },
    ethanol_storage_4: {
      id: "ethanol_storage_4",
      name: "Ethanol Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "ethanol",
          quantity: 180,
        },
      ],
    },
    exhaust_filtering: {
      id: "exhaust_filtering",
      name: "Exhaust Filtering",
      machine: "exhaust_scrubber",
      duration: 60,
      inputs: [
        {
          product: "exhaust",
          quantity: 180,
        },
        {
          product: "water",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "sulfur",
          quantity: 6,
        },
        {
          product: "carbon_dioxide",
          quantity: 72,
        },
        {
          product: "steam_lo",
          quantity: 24,
        },
        {
          product: "air_pollution",
          quantity: 24,
        },
      ],
    },
    exhaust_storage: {
      id: "exhaust_storage",
      name: "Exhaust Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "exhaust",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "exhaust",
          quantity: 4320,
        },
      ],
    },
    exhaust_storage_2: {
      id: "exhaust_storage_2",
      name: "Exhaust Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "exhaust",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "exhaust",
          quantity: 2160,
        },
      ],
    },
    exhaust_storage_3: {
      id: "exhaust_storage_3",
      name: "Exhaust Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "exhaust",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "exhaust",
          quantity: 360,
        },
      ],
    },
    exhaust_storage_4: {
      id: "exhaust_storage_4",
      name: "Exhaust Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "exhaust",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "exhaust",
          quantity: 180,
        },
      ],
    },
    fertilizer_i_storage: {
      id: "fertilizer_i_storage",
      name: "Fertilizer I Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_i",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "fertilizer_i",
          quantity: 4320,
        },
      ],
    },
    fertilizer_i_storage_2: {
      id: "fertilizer_i_storage_2",
      name: "Fertilizer I Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_i",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "fertilizer_i",
          quantity: 2160,
        },
      ],
    },
    fertilizer_i_storage_3: {
      id: "fertilizer_i_storage_3",
      name: "Fertilizer I Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_i",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "fertilizer_i",
          quantity: 360,
        },
      ],
    },
    fertilizer_i_storage_4: {
      id: "fertilizer_i_storage_4",
      name: "Fertilizer I Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_i",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "fertilizer_i",
          quantity: 180,
        },
      ],
    },
    fertilizer_ii_storage: {
      id: "fertilizer_ii_storage",
      name: "Fertilizer II Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_ii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "fertilizer_ii",
          quantity: 4320,
        },
      ],
    },
    fertilizer_ii_storage_2: {
      id: "fertilizer_ii_storage_2",
      name: "Fertilizer II Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_ii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "fertilizer_ii",
          quantity: 2160,
        },
      ],
    },
    fertilizer_ii_storage_3: {
      id: "fertilizer_ii_storage_3",
      name: "Fertilizer II Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_ii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "fertilizer_ii",
          quantity: 360,
        },
      ],
    },
    fertilizer_ii_storage_4: {
      id: "fertilizer_ii_storage_4",
      name: "Fertilizer II Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_ii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "fertilizer_ii",
          quantity: 180,
        },
      ],
    },
    fertilizer_ii_synthesis: {
      id: "fertilizer_ii_synthesis",
      name: "Fertilizer II Synthesis",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_i",
          quantity: 24,
        },
        {
          product: "limestone",
          quantity: 3,
        },
        {
          product: "sulfur",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "fertilizer_ii",
          quantity: 30,
        },
      ],
    },
    fertilizer_mixing: {
      id: "fertilizer_mixing",
      name: "Fertilizer Mixing",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "compost",
          quantity: 36,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "fertilizer_organic",
          quantity: 48,
        },
      ],
    },
    fertilizer_organic_storage: {
      id: "fertilizer_organic_storage",
      name: "Fertilizer (Organic) Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_organic",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "fertilizer_organic",
          quantity: 4320,
        },
      ],
    },
    fertilizer_organic_storage_2: {
      id: "fertilizer_organic_storage_2",
      name: "Fertilizer (Organic) Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_organic",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "fertilizer_organic",
          quantity: 2160,
        },
      ],
    },
    fertilizer_organic_storage_3: {
      id: "fertilizer_organic_storage_3",
      name: "Fertilizer (Organic) Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_organic",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "fertilizer_organic",
          quantity: 360,
        },
      ],
    },
    fertilizer_organic_storage_4: {
      id: "fertilizer_organic_storage_4",
      name: "Fertilizer (Organic) Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "fertilizer_organic",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "fertilizer_organic",
          quantity: 180,
        },
      ],
    },
    fertilizer_synthesis: {
      id: "fertilizer_synthesis",
      name: "Fertilizer Synthesis",
      machine: "chemical_plant",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 6,
        },
        {
          product: "nitrogen",
          quantity: 18,
        },
        {
          product: "water",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "fertilizer_i",
          quantity: 12,
        },
      ],
    },
    fertilizer_synthesis_2: {
      id: "fertilizer_synthesis_2",
      name: "Fertilizer Synthesis",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "ammonia",
          quantity: 12,
        },
        {
          product: "nitrogen",
          quantity: 36,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "fertilizer_i",
          quantity: 24,
        },
      ],
    },
    filter_media_mixing: {
      id: "filter_media_mixing",
      name: "Filter Media Mixing",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "gravel",
          quantity: 24,
        },
        {
          product: "sand",
          quantity: 12,
        },
        {
          product: "coal",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "filter_media",
          quantity: 36,
        },
      ],
    },
    filter_media_storage: {
      id: "filter_media_storage",
      name: "Filter Media Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "filter_media",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "filter_media",
          quantity: 4320,
        },
      ],
    },
    filter_media_storage_2: {
      id: "filter_media_storage_2",
      name: "Filter Media Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "filter_media",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "filter_media",
          quantity: 2160,
        },
      ],
    },
    filter_media_storage_3: {
      id: "filter_media_storage_3",
      name: "Filter Media Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "filter_media",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "filter_media",
          quantity: 360,
        },
      ],
    },
    filter_media_storage_4: {
      id: "filter_media_storage_4",
      name: "Filter Media Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "filter_media",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "filter_media",
          quantity: 180,
        },
      ],
    },
    flour_storage: {
      id: "flour_storage",
      name: "Flour Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "flour",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "flour",
          quantity: 4320,
        },
      ],
    },
    flour_storage_2: {
      id: "flour_storage_2",
      name: "Flour Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "flour",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "flour",
          quantity: 2160,
        },
      ],
    },
    flour_storage_3: {
      id: "flour_storage_3",
      name: "Flour Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "flour",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "flour",
          quantity: 360,
        },
      ],
    },
    flour_storage_4: {
      id: "flour_storage_4",
      name: "Flour Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "flour",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "flour",
          quantity: 180,
        },
      ],
    },
    flour_storage_5: {
      id: "flour_storage_5",
      name: "Flour Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "flour",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "flour",
          quantity: 5000,
        },
      ],
    },
    flowers_storage: {
      id: "flowers_storage",
      name: "Flowers Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "flowers",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "flowers",
          quantity: 4320,
        },
      ],
    },
    flowers_storage_2: {
      id: "flowers_storage_2",
      name: "Flowers Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "flowers",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "flowers",
          quantity: 2160,
        },
      ],
    },
    flowers_storage_3: {
      id: "flowers_storage_3",
      name: "Flowers Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "flowers",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "flowers",
          quantity: 360,
        },
      ],
    },
    flowers_storage_4: {
      id: "flowers_storage_4",
      name: "Flowers Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "flowers",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "flowers",
          quantity: 180,
        },
      ],
    },
    flowers_storage_5: {
      id: "flowers_storage_5",
      name: "Flowers Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "flowers",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "flowers",
          quantity: 5000,
        },
      ],
    },
    fluoride_leaching: {
      id: "fluoride_leaching",
      name: "Fluoride Leaching",
      machine: "settling_tank",
      duration: 60,
      inputs: [
        {
          product: "rock",
          quantity: 8,
        },
        {
          product: "acid",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 8,
        },
        {
          product: "slag",
          quantity: 2,
        },
      ],
    },
    food_pack_assembly_eggs: {
      id: "food_pack_assembly_eggs",
      name: "Food Pack Assembly (Eggs)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "eggs",
          quantity: 6,
        },
        {
          product: "bread",
          quantity: 12,
        },
        {
          product: "snack",
          quantity: 18,
        },
      ],
      outputs: [
        {
          product: "food_pack",
          quantity: 12,
        },
      ],
    },
    food_pack_assembly_meat: {
      id: "food_pack_assembly_meat",
      name: "Food Pack Assembly (Meat)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "meat",
          quantity: 6,
        },
        {
          product: "bread",
          quantity: 12,
        },
        {
          product: "snack",
          quantity: 18,
        },
      ],
      outputs: [
        {
          product: "food_pack",
          quantity: 12,
        },
      ],
    },
    food_pack_storage: {
      id: "food_pack_storage",
      name: "Food Pack Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "food_pack",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "food_pack",
          quantity: 4320,
        },
      ],
    },
    food_pack_storage_2: {
      id: "food_pack_storage_2",
      name: "Food Pack Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "food_pack",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "food_pack",
          quantity: 2160,
        },
      ],
    },
    food_pack_storage_3: {
      id: "food_pack_storage_3",
      name: "Food Pack Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "food_pack",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "food_pack",
          quantity: 360,
        },
      ],
    },
    food_pack_storage_4: {
      id: "food_pack_storage_4",
      name: "Food Pack Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "food_pack",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "food_pack",
          quantity: 180,
        },
      ],
    },
    food_pack_storage_5: {
      id: "food_pack_storage_5",
      name: "Food Pack Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "food_pack",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "food_pack",
          quantity: 5000,
        },
      ],
    },
    fruit_storage: {
      id: "fruit_storage",
      name: "Fruit Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "fruit",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "fruit",
          quantity: 4320,
        },
      ],
    },
    fruit_storage_2: {
      id: "fruit_storage_2",
      name: "Fruit Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "fruit",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "fruit",
          quantity: 2160,
        },
      ],
    },
    fruit_storage_3: {
      id: "fruit_storage_3",
      name: "Fruit Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "fruit",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "fruit",
          quantity: 360,
        },
      ],
    },
    fruit_storage_4: {
      id: "fruit_storage_4",
      name: "Fruit Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "fruit",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "fruit",
          quantity: 180,
        },
      ],
    },
    fruit_storage_5: {
      id: "fruit_storage_5",
      name: "Fruit Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "fruit",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "fruit",
          quantity: 5000,
        },
      ],
    },
    fuel_gas_disposal: {
      id: "fuel_gas_disposal",
      name: "Fuel Gas Disposal",
      machine: "flare",
      duration: 60,
      inputs: [
        {
          product: "fuel_gas",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 12,
        },
      ],
    },
    fuel_gas_storage: {
      id: "fuel_gas_storage",
      name: "Fuel Gas Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "fuel_gas",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 4320,
        },
      ],
    },
    fuel_gas_storage_2: {
      id: "fuel_gas_storage_2",
      name: "Fuel Gas Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "fuel_gas",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 2160,
        },
      ],
    },
    fuel_gas_storage_3: {
      id: "fuel_gas_storage_3",
      name: "Fuel Gas Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "fuel_gas",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 360,
        },
      ],
    },
    fuel_gas_storage_4: {
      id: "fuel_gas_storage_4",
      name: "Fuel Gas Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "fuel_gas",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 180,
        },
      ],
    },
    fuel_transesterification: {
      id: "fuel_transesterification",
      name: "Fuel Transesterification",
      machine: "chemical_plant",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 7.5,
        },
        {
          product: "cooking_oil",
          quantity: 18,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 27,
        },
      ],
    },
    fuel_transesterification_2: {
      id: "fuel_transesterification_2",
      name: "Fuel Transesterification",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 15,
        },
        {
          product: "cooking_oil",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 54,
        },
      ],
    },
    fuelgas_reforming: {
      id: "fuelgas_reforming",
      name: "FuelGas Reforming",
      machine: "cracking_unit",
      duration: 60,
      inputs: [
        {
          product: "fuel_gas",
          quantity: 36,
        },
        {
          product: "oxygen",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 18,
        },
        {
          product: "carbon_dioxide",
          quantity: 36,
        },
      ],
    },
    fuelgas_synthesis: {
      id: "fuelgas_synthesis",
      name: "FuelGas Synthesis",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "hydrogen",
          quantity: 24,
        },
        {
          product: "carbon_dioxide",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 24,
        },
      ],
    },
    glass_broken_smelting: {
      id: "glass_broken_smelting",
      name: "Glass Broken Smelting",
      machine: "blast_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "broken_glass",
          quantity: 72,
        },
        {
          product: "coal",
          quantity: 15,
        },
      ],
      outputs: [
        {
          product: "molten_glass",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 30,
        },
      ],
    },
    glass_broken_smelting_2: {
      id: "glass_broken_smelting_2",
      name: "Glass Broken Smelting",
      machine: "blast_furnace",
      duration: 60,
      inputs: [
        {
          product: "broken_glass",
          quantity: 36,
        },
        {
          product: "coal",
          quantity: 9,
        },
      ],
      outputs: [
        {
          product: "molten_glass",
          quantity: 24,
        },
        {
          product: "exhaust",
          quantity: 18,
        },
      ],
    },
    glass_casting: {
      id: "glass_casting",
      name: "Glass Casting",
      machine: "glass_maker",
      duration: 60,
      inputs: [
        {
          product: "molten_glass",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "glass",
          quantity: 24,
        },
        {
          product: "slag",
          quantity: 6,
        },
      ],
    },
    glass_casting_2: {
      id: "glass_casting_2",
      name: "Glass Casting",
      machine: "glass_maker_ii",
      duration: 60,
      inputs: [
        {
          product: "molten_glass",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "glass",
          quantity: 72,
        },
      ],
    },
    glass_mix_mixing: {
      id: "glass_mix_mixing",
      name: "Glass Mix Mixing",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "sand",
          quantity: 48,
        },
        {
          product: "limestone",
          quantity: 12,
        },
        {
          product: "salt",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "glass_mix",
          quantity: 36,
        },
      ],
    },
    glass_mix_mixing_2: {
      id: "glass_mix_mixing_2",
      name: "Glass Mix Mixing",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "sand",
          quantity: 48,
        },
        {
          product: "limestone",
          quantity: 12,
        },
        {
          product: "salt",
          quantity: 12,
        },
        {
          product: "acid",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "glass_mix",
          quantity: 48,
        },
      ],
    },
    glass_mix_storage: {
      id: "glass_mix_storage",
      name: "Glass Mix Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "glass_mix",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "glass_mix",
          quantity: 4320,
        },
      ],
    },
    glass_mix_storage_2: {
      id: "glass_mix_storage_2",
      name: "Glass Mix Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "glass_mix",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "glass_mix",
          quantity: 2160,
        },
      ],
    },
    glass_mix_storage_3: {
      id: "glass_mix_storage_3",
      name: "Glass Mix Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "glass_mix",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "glass_mix",
          quantity: 360,
        },
      ],
    },
    glass_mix_storage_4: {
      id: "glass_mix_storage_4",
      name: "Glass Mix Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "glass_mix",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "glass_mix",
          quantity: 180,
        },
      ],
    },
    glass_smelting: {
      id: "glass_smelting",
      name: "Glass Smelting",
      machine: "blast_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "glass_mix",
          quantity: 48,
        },
        {
          product: "coal",
          quantity: 15,
        },
      ],
      outputs: [
        {
          product: "molten_glass",
          quantity: 48,
        },
        {
          product: "slag",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 36,
        },
      ],
    },
    glass_smelting_2: {
      id: "glass_smelting_2",
      name: "Glass Smelting",
      machine: "blast_furnace",
      duration: 60,
      inputs: [
        {
          product: "glass_mix",
          quantity: 24,
        },
        {
          product: "coal",
          quantity: 9,
        },
      ],
      outputs: [
        {
          product: "molten_glass",
          quantity: 24,
        },
        {
          product: "slag",
          quantity: 9,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    glass_smelting_3: {
      id: "glass_smelting_3",
      name: "Glass Smelting",
      machine: "arc_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "glass_mix",
          quantity: 48,
        },
        {
          product: "graphite",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "molten_glass",
          quantity: 48,
        },
        {
          product: "slag",
          quantity: 12,
        },
        {
          product: "steam_lo",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 12,
        },
      ],
    },
    glass_smelting_4: {
      id: "glass_smelting_4",
      name: "Glass Smelting",
      machine: "arc_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "broken_glass",
          quantity: 72,
        },
        {
          product: "graphite",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "molten_glass",
          quantity: 48,
        },
        {
          product: "steam_lo",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 6,
        },
      ],
    },
    glass_storage: {
      id: "glass_storage",
      name: "Glass Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "glass",
          quantity: 4320,
        },
      ],
    },
    glass_storage_2: {
      id: "glass_storage_2",
      name: "Glass Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "glass",
          quantity: 2160,
        },
      ],
    },
    glass_storage_3: {
      id: "glass_storage_3",
      name: "Glass Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "glass",
          quantity: 360,
        },
      ],
    },
    glass_storage_4: {
      id: "glass_storage_4",
      name: "Glass Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "glass",
          quantity: 180,
        },
      ],
    },
    glass_storage_5: {
      id: "glass_storage_5",
      name: "Glass Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "glass",
          quantity: 5000,
        },
      ],
    },
    gold_mining: {
      id: "gold_mining",
      name: "Gold Mining",
      machine: "gold_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "gold_ore",
          quantity: 0,
        },
      ],
    },
    gold_ore_concentrate_storage: {
      id: "gold_ore_concentrate_storage",
      name: "Gold Ore Concentrate Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 4320,
        },
      ],
    },
    gold_ore_concentrate_storage_2: {
      id: "gold_ore_concentrate_storage_2",
      name: "Gold Ore Concentrate Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 2160,
        },
      ],
    },
    gold_ore_concentrate_storage_3: {
      id: "gold_ore_concentrate_storage_3",
      name: "Gold Ore Concentrate Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 360,
        },
      ],
    },
    gold_ore_concentrate_storage_4: {
      id: "gold_ore_concentrate_storage_4",
      name: "Gold Ore Concentrate Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 180,
        },
      ],
    },
    gold_ore_crushed_storage: {
      id: "gold_ore_crushed_storage",
      name: "Gold Ore Crushed Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_crushed",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "gold_ore_crushed",
          quantity: 4320,
        },
      ],
    },
    gold_ore_crushed_storage_2: {
      id: "gold_ore_crushed_storage_2",
      name: "Gold Ore Crushed Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_crushed",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "gold_ore_crushed",
          quantity: 2160,
        },
      ],
    },
    gold_ore_crushed_storage_3: {
      id: "gold_ore_crushed_storage_3",
      name: "Gold Ore Crushed Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_crushed",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "gold_ore_crushed",
          quantity: 360,
        },
      ],
    },
    gold_ore_crushed_storage_4: {
      id: "gold_ore_crushed_storage_4",
      name: "Gold Ore Crushed Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_crushed",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "gold_ore_crushed",
          quantity: 180,
        },
      ],
    },
    gold_ore_crushing: {
      id: "gold_ore_crushing",
      name: "Gold Ore Crushing",
      machine: "crusher",
      duration: 60,
      inputs: [
        {
          product: "gold_ore",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "gold_ore_crushed",
          quantity: 24,
        },
      ],
    },
    gold_ore_milling: {
      id: "gold_ore_milling",
      name: "Gold Ore Milling",
      machine: "crusher",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_crushed",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "gold_ore_powder",
          quantity: 48,
        },
      ],
    },
    gold_ore_powder_storage: {
      id: "gold_ore_powder_storage",
      name: "Gold Ore Powder Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_powder",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "gold_ore_powder",
          quantity: 4320,
        },
      ],
    },
    gold_ore_powder_storage_2: {
      id: "gold_ore_powder_storage_2",
      name: "Gold Ore Powder Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_powder",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "gold_ore_powder",
          quantity: 2160,
        },
      ],
    },
    gold_ore_powder_storage_3: {
      id: "gold_ore_powder_storage_3",
      name: "Gold Ore Powder Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_powder",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "gold_ore_powder",
          quantity: 360,
        },
      ],
    },
    gold_ore_powder_storage_4: {
      id: "gold_ore_powder_storage_4",
      name: "Gold Ore Powder Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_powder",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "gold_ore_powder",
          quantity: 180,
        },
      ],
    },
    gold_ore_storage: {
      id: "gold_ore_storage",
      name: "Gold Ore Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "gold_ore",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "gold_ore",
          quantity: 4320,
        },
      ],
    },
    gold_ore_storage_2: {
      id: "gold_ore_storage_2",
      name: "Gold Ore Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "gold_ore",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "gold_ore",
          quantity: 2160,
        },
      ],
    },
    gold_ore_storage_3: {
      id: "gold_ore_storage_3",
      name: "Gold Ore Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "gold_ore",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "gold_ore",
          quantity: 360,
        },
      ],
    },
    gold_ore_storage_4: {
      id: "gold_ore_storage_4",
      name: "Gold Ore Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "gold_ore",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "gold_ore",
          quantity: 180,
        },
      ],
    },
    gold_scrap_storage: {
      id: "gold_scrap_storage",
      name: "Gold Scrap Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "gold_scrap",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "gold_scrap",
          quantity: 4320,
        },
      ],
    },
    gold_scrap_storage_2: {
      id: "gold_scrap_storage_2",
      name: "Gold Scrap Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "gold_scrap",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "gold_scrap",
          quantity: 2160,
        },
      ],
    },
    gold_scrap_storage_3: {
      id: "gold_scrap_storage_3",
      name: "Gold Scrap Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "gold_scrap",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "gold_scrap",
          quantity: 360,
        },
      ],
    },
    gold_scrap_storage_4: {
      id: "gold_scrap_storage_4",
      name: "Gold Scrap Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "gold_scrap",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "gold_scrap",
          quantity: 180,
        },
      ],
    },
    gold_settling: {
      id: "gold_settling",
      name: "Gold Settling",
      machine: "settling_tank",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_powder",
          quantity: 48,
        },
        {
          product: "acid",
          quantity: 16,
        },
      ],
      outputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 24,
        },
        {
          product: "toxic_slurry",
          quantity: 24,
        },
      ],
    },
    gold_smelting: {
      id: "gold_smelting",
      name: "Gold Smelting",
      machine: "gold_furnace",
      duration: 60,
      inputs: [
        {
          product: "gold_ore_concentrate",
          quantity: 12,
        },
        {
          product: "sand",
          quantity: 2,
        },
      ],
      outputs: [
        {
          product: "gold",
          quantity: 6,
        },
        {
          product: "exhaust",
          quantity: 12,
        },
      ],
    },
    gold_smelting_2: {
      id: "gold_smelting_2",
      name: "Gold Smelting",
      machine: "gold_furnace",
      duration: 60,
      inputs: [
        {
          product: "gold_scrap",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "gold",
          quantity: 6,
        },
        {
          product: "exhaust",
          quantity: 6,
        },
      ],
    },
    gold_storage: {
      id: "gold_storage",
      name: "Gold Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "gold",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "gold",
          quantity: 4320,
        },
      ],
    },
    gold_storage_2: {
      id: "gold_storage_2",
      name: "Gold Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "gold",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "gold",
          quantity: 2160,
        },
      ],
    },
    gold_storage_3: {
      id: "gold_storage_3",
      name: "Gold Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "gold",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "gold",
          quantity: 360,
        },
      ],
    },
    gold_storage_4: {
      id: "gold_storage_4",
      name: "Gold Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "gold",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "gold",
          quantity: 180,
        },
      ],
    },
    gold_storage_5: {
      id: "gold_storage_5",
      name: "Gold Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "gold",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "gold",
          quantity: 5000,
        },
      ],
    },
    graphite_production: {
      id: "graphite_production",
      name: "Graphite Production",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "coal",
          quantity: 6,
        },
        {
          product: "chlorine",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "graphite",
          quantity: 12,
        },
        {
          product: "sour_water",
          quantity: 6,
        },
      ],
    },
    graphite_production_2: {
      id: "graphite_production_2",
      name: "Graphite Production",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "carbon_dioxide",
          quantity: 72,
        },
      ],
      outputs: [
        {
          product: "graphite",
          quantity: 3,
        },
      ],
    },
    graphite_storage: {
      id: "graphite_storage",
      name: "Graphite Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "graphite",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "graphite",
          quantity: 4320,
        },
      ],
    },
    graphite_storage_2: {
      id: "graphite_storage_2",
      name: "Graphite Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "graphite",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "graphite",
          quantity: 2160,
        },
      ],
    },
    graphite_storage_3: {
      id: "graphite_storage_3",
      name: "Graphite Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "graphite",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "graphite",
          quantity: 360,
        },
      ],
    },
    graphite_storage_4: {
      id: "graphite_storage_4",
      name: "Graphite Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "graphite",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "graphite",
          quantity: 180,
        },
      ],
    },
    graphite_storage_5: {
      id: "graphite_storage_5",
      name: "Graphite Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "graphite",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "graphite",
          quantity: 5000,
        },
      ],
    },
    gravel_crushing: {
      id: "gravel_crushing",
      name: "Gravel Crushing",
      machine: "crusher",
      duration: 60,
      inputs: [
        {
          product: "gravel",
          quantity: 8,
        },
      ],
      outputs: [
        {
          product: "sand",
          quantity: 8,
        },
      ],
    },
    gravel_mining: {
      id: "gravel_mining",
      name: "Gravel Mining",
      machine: "gravel_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "gravel",
          quantity: 0,
        },
      ],
    },
    gravel_storage: {
      id: "gravel_storage",
      name: "Gravel Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "gravel",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "gravel",
          quantity: 4320,
        },
      ],
    },
    gravel_storage_2: {
      id: "gravel_storage_2",
      name: "Gravel Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "gravel",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "gravel",
          quantity: 2160,
        },
      ],
    },
    gravel_storage_3: {
      id: "gravel_storage_3",
      name: "Gravel Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "gravel",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "gravel",
          quantity: 360,
        },
      ],
    },
    gravel_storage_4: {
      id: "gravel_storage_4",
      name: "Gravel Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "gravel",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "gravel",
          quantity: 180,
        },
      ],
    },
    heavy_distillate_refining: {
      id: "heavy_distillate_refining",
      name: "Heavy Distillate Refining",
      machine: "distillation_stage_iii",
      duration: 60,
      inputs: [
        {
          product: "light_oil",
          quantity: 12,
        },
        {
          product: "steam_hi",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "naphtha",
          quantity: 12,
        },
        {
          product: "fuel_gas",
          quantity: 18,
        },
      ],
    },
    heavy_oil_disposal: {
      id: "heavy_oil_disposal",
      name: "Heavy Oil Disposal",
      machine: "flare",
      duration: 60,
      inputs: [
        {
          product: "heavy_oil",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 30,
        },
      ],
    },
    heavy_oil_storage: {
      id: "heavy_oil_storage",
      name: "Heavy Oil Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "heavy_oil",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "heavy_oil",
          quantity: 4320,
        },
      ],
    },
    heavy_oil_storage_2: {
      id: "heavy_oil_storage_2",
      name: "Heavy Oil Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "heavy_oil",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "heavy_oil",
          quantity: 2160,
        },
      ],
    },
    heavy_oil_storage_3: {
      id: "heavy_oil_storage_3",
      name: "Heavy Oil Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "heavy_oil",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "heavy_oil",
          quantity: 360,
        },
      ],
    },
    heavy_oil_storage_4: {
      id: "heavy_oil_storage_4",
      name: "Heavy Oil Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "heavy_oil",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "heavy_oil",
          quantity: 180,
        },
      ],
    },
    heavyoil_cracking: {
      id: "heavyoil_cracking",
      name: "HeavyOil Cracking",
      machine: "cracking_unit",
      duration: 60,
      inputs: [
        {
          product: "heavy_oil",
          quantity: 12,
        },
        {
          product: "hydrogen",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 24,
        },
        {
          product: "fuel_gas",
          quantity: 6,
        },
      ],
    },
    heavyoil_cracking_2: {
      id: "heavyoil_cracking_2",
      name: "HeavyOil Cracking",
      machine: "cracking_unit",
      duration: 60,
      inputs: [
        {
          product: "heavy_oil",
          quantity: 12,
        },
        {
          product: "hydrogen",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "naphtha",
          quantity: 18,
        },
        {
          product: "fuel_gas",
          quantity: 12,
        },
      ],
    },
    "hi-press_steam_condensation": {
      id: "hi-press_steam_condensation",
      name: "Hi-press Steam Condensation",
      machine: "cooling_tower",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 12,
        },
      ],
    },
    "hi-press_steam_condensation_2": {
      id: "hi-press_steam_condensation_2",
      name: "Hi-press Steam Condensation",
      machine: "cooling_tower_large",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 96,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 72,
        },
      ],
    },
    household_appliances_assembly_t1: {
      id: "household_appliances_assembly_t1",
      name: "Household Appliances Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "electronics",
          quantity: 16,
        },
        {
          product: "electronics_ii",
          quantity: 4,
        },
        {
          product: "steel",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "household_appliances",
          quantity: 16,
        },
      ],
    },
    household_appliances_assembly_t2: {
      id: "household_appliances_assembly_t2",
      name: "Household Appliances Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "electronics",
          quantity: 24,
        },
        {
          product: "electronics_ii",
          quantity: 6,
        },
        {
          product: "steel",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "household_appliances",
          quantity: 24,
        },
      ],
    },
    household_appliances_assembly_t3: {
      id: "household_appliances_assembly_t3",
      name: "Household Appliances Assembly (T3)",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "electronics",
          quantity: 48,
        },
        {
          product: "electronics_ii",
          quantity: 12,
        },
        {
          product: "steel",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "household_appliances",
          quantity: 48,
        },
      ],
    },
    household_appliances_storage: {
      id: "household_appliances_storage",
      name: "Household Appliances Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "household_appliances",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "household_appliances",
          quantity: 4320,
        },
      ],
    },
    household_appliances_storage_2: {
      id: "household_appliances_storage_2",
      name: "Household Appliances Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "household_appliances",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "household_appliances",
          quantity: 2160,
        },
      ],
    },
    household_appliances_storage_3: {
      id: "household_appliances_storage_3",
      name: "Household Appliances Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "household_appliances",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "household_appliances",
          quantity: 360,
        },
      ],
    },
    household_appliances_storage_4: {
      id: "household_appliances_storage_4",
      name: "Household Appliances Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "household_appliances",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "household_appliances",
          quantity: 180,
        },
      ],
    },
    household_appliances_storage_5: {
      id: "household_appliances_storage_5",
      name: "Household Appliances Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "household_appliances",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "household_appliances",
          quantity: 5000,
        },
      ],
    },
    household_goods_assembly_t1: {
      id: "household_goods_assembly_t1",
      name: "Household Goods Assembly (T1)",
      machine: "assembly_electric",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 10,
        },
        {
          product: "steel",
          quantity: 2,
        },
        {
          product: "wood",
          quantity: 2,
        },
      ],
      outputs: [
        {
          product: "household_goods",
          quantity: 8,
        },
      ],
    },
    household_goods_assembly_t2: {
      id: "household_goods_assembly_t2",
      name: "Household Goods Assembly (T2)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 20,
        },
        {
          product: "steel",
          quantity: 4,
        },
        {
          product: "wood",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "household_goods",
          quantity: 16,
        },
      ],
    },
    household_goods_assembly_t3: {
      id: "household_goods_assembly_t3",
      name: "Household Goods Assembly (T3)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 40,
        },
        {
          product: "steel",
          quantity: 8,
        },
        {
          product: "wood",
          quantity: 8,
        },
      ],
      outputs: [
        {
          product: "household_goods",
          quantity: 32,
        },
      ],
    },
    household_goods_storage: {
      id: "household_goods_storage",
      name: "Household Goods Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "household_goods",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "household_goods",
          quantity: 4320,
        },
      ],
    },
    household_goods_storage_2: {
      id: "household_goods_storage_2",
      name: "Household Goods Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "household_goods",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "household_goods",
          quantity: 2160,
        },
      ],
    },
    household_goods_storage_3: {
      id: "household_goods_storage_3",
      name: "Household Goods Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "household_goods",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "household_goods",
          quantity: 360,
        },
      ],
    },
    household_goods_storage_4: {
      id: "household_goods_storage_4",
      name: "Household Goods Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "household_goods",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "household_goods",
          quantity: 180,
        },
      ],
    },
    household_goods_storage_5: {
      id: "household_goods_storage_5",
      name: "Household Goods Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "household_goods",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "household_goods",
          quantity: 5000,
        },
      ],
    },
    hydrogen_disposal: {
      id: "hydrogen_disposal",
      name: "Hydrogen Disposal",
      machine: "flare",
      duration: 60,
      inputs: [
        {
          product: "hydrogen",
          quantity: 48,
        },
      ],
      outputs: [],
    },
    hydrogen_fluoride_storage: {
      id: "hydrogen_fluoride_storage",
      name: "Hydrogen Fluoride Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 4320,
        },
      ],
    },
    hydrogen_fluoride_storage_2: {
      id: "hydrogen_fluoride_storage_2",
      name: "Hydrogen Fluoride Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 2160,
        },
      ],
    },
    hydrogen_fluoride_storage_3: {
      id: "hydrogen_fluoride_storage_3",
      name: "Hydrogen Fluoride Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 360,
        },
      ],
    },
    hydrogen_fluoride_storage_4: {
      id: "hydrogen_fluoride_storage_4",
      name: "Hydrogen Fluoride Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "hydrogen_fluoride",
          quantity: 180,
        },
      ],
    },
    hydrogen_reforming: {
      id: "hydrogen_reforming",
      name: "Hydrogen Reforming",
      machine: "hydrogen_reformer",
      duration: 60,
      inputs: [
        {
          product: "fuel_gas",
          quantity: 36,
        },
        {
          product: "steam_hi",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "hydrogen",
          quantity: 36,
        },
        {
          product: "carbon_dioxide",
          quantity: 36,
        },
      ],
    },
    hydrogen_storage: {
      id: "hydrogen_storage",
      name: "Hydrogen Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "hydrogen",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "hydrogen",
          quantity: 4320,
        },
      ],
    },
    hydrogen_storage_2: {
      id: "hydrogen_storage_2",
      name: "Hydrogen Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "hydrogen",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "hydrogen",
          quantity: 2160,
        },
      ],
    },
    hydrogen_storage_3: {
      id: "hydrogen_storage_3",
      name: "Hydrogen Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "hydrogen",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "hydrogen",
          quantity: 360,
        },
      ],
    },
    hydrogen_storage_4: {
      id: "hydrogen_storage_4",
      name: "Hydrogen Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "hydrogen",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "hydrogen",
          quantity: 180,
        },
      ],
    },
    impure_copper_storage: {
      id: "impure_copper_storage",
      name: "Impure Copper Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "impure_copper",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "impure_copper",
          quantity: 4320,
        },
      ],
    },
    impure_copper_storage_2: {
      id: "impure_copper_storage_2",
      name: "Impure Copper Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "impure_copper",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "impure_copper",
          quantity: 2160,
        },
      ],
    },
    impure_copper_storage_3: {
      id: "impure_copper_storage_3",
      name: "Impure Copper Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "impure_copper",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "impure_copper",
          quantity: 360,
        },
      ],
    },
    impure_copper_storage_4: {
      id: "impure_copper_storage_4",
      name: "Impure Copper Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "impure_copper",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "impure_copper",
          quantity: 180,
        },
      ],
    },
    impure_copper_storage_5: {
      id: "impure_copper_storage_5",
      name: "Impure Copper Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "impure_copper",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "impure_copper",
          quantity: 5000,
        },
      ],
    },
    iron_casting: {
      id: "iron_casting",
      name: "Iron Casting",
      machine: "metal_caster",
      duration: 60,
      inputs: [
        {
          product: "molten_iron",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "iron",
          quantity: 12,
        },
      ],
    },
    iron_casting_2: {
      id: "iron_casting_2",
      name: "Iron Casting",
      machine: "metal_caster_ii",
      duration: 60,
      inputs: [
        {
          product: "molten_iron",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "iron",
          quantity: 24,
        },
      ],
    },
    iron_mining: {
      id: "iron_mining",
      name: "Iron Mining",
      machine: "iron_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "iron_ore",
          quantity: 0,
        },
      ],
    },
    iron_ore_crushed_storage: {
      id: "iron_ore_crushed_storage",
      name: "Iron Ore Crushed Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "iron_ore_crushed",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "iron_ore_crushed",
          quantity: 4320,
        },
      ],
    },
    iron_ore_crushed_storage_2: {
      id: "iron_ore_crushed_storage_2",
      name: "Iron Ore Crushed Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "iron_ore_crushed",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "iron_ore_crushed",
          quantity: 2160,
        },
      ],
    },
    iron_ore_crushed_storage_3: {
      id: "iron_ore_crushed_storage_3",
      name: "Iron Ore Crushed Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "iron_ore_crushed",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "iron_ore_crushed",
          quantity: 360,
        },
      ],
    },
    iron_ore_crushed_storage_4: {
      id: "iron_ore_crushed_storage_4",
      name: "Iron Ore Crushed Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "iron_ore_crushed",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "iron_ore_crushed",
          quantity: 180,
        },
      ],
    },
    iron_ore_crushing: {
      id: "iron_ore_crushing",
      name: "Iron Ore Crushing",
      machine: "crusher",
      duration: 60,
      inputs: [
        {
          product: "iron_ore",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "iron_ore_crushed",
          quantity: 36,
        },
      ],
    },
    iron_ore_storage: {
      id: "iron_ore_storage",
      name: "Iron Ore Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "iron_ore",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "iron_ore",
          quantity: 4320,
        },
      ],
    },
    iron_ore_storage_2: {
      id: "iron_ore_storage_2",
      name: "Iron Ore Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "iron_ore",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "iron_ore",
          quantity: 2160,
        },
      ],
    },
    iron_ore_storage_3: {
      id: "iron_ore_storage_3",
      name: "Iron Ore Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "iron_ore",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "iron_ore",
          quantity: 360,
        },
      ],
    },
    iron_ore_storage_4: {
      id: "iron_ore_storage_4",
      name: "Iron Ore Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "iron_ore",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "iron_ore",
          quantity: 180,
        },
      ],
    },
    iron_scrap_smelting: {
      id: "iron_scrap_smelting",
      name: "Iron Scrap Smelting",
      machine: "blast_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "iron_scrap",
          quantity: 48,
        },
        {
          product: "coal",
          quantity: 15,
        },
      ],
      outputs: [
        {
          product: "molten_iron",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 30,
        },
      ],
    },
    iron_scrap_smelting_2: {
      id: "iron_scrap_smelting_2",
      name: "Iron Scrap Smelting",
      machine: "blast_furnace",
      duration: 60,
      inputs: [
        {
          product: "iron_scrap",
          quantity: 24,
        },
        {
          product: "coal",
          quantity: 9,
        },
      ],
      outputs: [
        {
          product: "molten_iron",
          quantity: 24,
        },
        {
          product: "exhaust",
          quantity: 18,
        },
      ],
    },
    iron_scrap_smelting_arc: {
      id: "iron_scrap_smelting_arc",
      name: "Iron Scrap Smelting (Arc)",
      machine: "arc_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "iron_scrap",
          quantity: 48,
        },
        {
          product: "graphite",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "molten_iron",
          quantity: 48,
        },
        {
          product: "steam_lo",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 6,
        },
      ],
    },
    iron_scrap_storage: {
      id: "iron_scrap_storage",
      name: "Iron Scrap Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "iron_scrap",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "iron_scrap",
          quantity: 4320,
        },
      ],
    },
    iron_scrap_storage_2: {
      id: "iron_scrap_storage_2",
      name: "Iron Scrap Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "iron_scrap",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "iron_scrap",
          quantity: 2160,
        },
      ],
    },
    iron_scrap_storage_3: {
      id: "iron_scrap_storage_3",
      name: "Iron Scrap Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "iron_scrap",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "iron_scrap",
          quantity: 360,
        },
      ],
    },
    iron_scrap_storage_4: {
      id: "iron_scrap_storage_4",
      name: "Iron Scrap Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "iron_scrap",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "iron_scrap",
          quantity: 180,
        },
      ],
    },
    iron_smelting: {
      id: "iron_smelting",
      name: "Iron Smelting",
      machine: "blast_furnace",
      duration: 60,
      inputs: [
        {
          product: "iron_ore",
          quantity: 24,
        },
        {
          product: "coal",
          quantity: 9,
        },
      ],
      outputs: [
        {
          product: "molten_iron",
          quantity: 24,
        },
        {
          product: "slag",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    iron_smelting_arc: {
      id: "iron_smelting_arc",
      name: "Iron Smelting (Arc)",
      machine: "arc_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "iron_ore_crushed",
          quantity: 36,
        },
        {
          product: "limestone",
          quantity: 3,
        },
        {
          product: "graphite",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "molten_iron",
          quantity: 48,
        },
        {
          product: "slag",
          quantity: 18,
        },
        {
          product: "steam_lo",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 12,
        },
      ],
    },
    iron_smelting_lime: {
      id: "iron_smelting_lime",
      name: "Iron Smelting (Lime)",
      machine: "blast_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "iron_ore_crushed",
          quantity: 36,
        },
        {
          product: "limestone",
          quantity: 3,
        },
        {
          product: "coal",
          quantity: 15,
        },
      ],
      outputs: [
        {
          product: "molten_iron",
          quantity: 48,
        },
        {
          product: "slag",
          quantity: 18,
        },
        {
          product: "exhaust",
          quantity: 36,
        },
      ],
    },
    iron_storage: {
      id: "iron_storage",
      name: "Iron Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "iron",
          quantity: 4320,
        },
      ],
    },
    iron_storage_2: {
      id: "iron_storage_2",
      name: "Iron Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "iron",
          quantity: 2160,
        },
      ],
    },
    iron_storage_3: {
      id: "iron_storage_3",
      name: "Iron Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "iron",
          quantity: 360,
        },
      ],
    },
    iron_storage_4: {
      id: "iron_storage_4",
      name: "Iron Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "iron",
          quantity: 180,
        },
      ],
    },
    iron_storage_5: {
      id: "iron_storage_5",
      name: "Iron Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "iron",
          quantity: 5000,
        },
      ],
    },
    lab_equipment_2_assembly_t2: {
      id: "lab_equipment_2_assembly_t2",
      name: "Lab Equipment 2 Assembly (T2)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_ii",
          quantity: 12,
        },
        {
          product: "glass",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iii",
          quantity: 6,
        },
      ],
    },
    lab_equipment_2_assembly_t3: {
      id: "lab_equipment_2_assembly_t3",
      name: "Lab Equipment 2 Assembly (T3)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_ii",
          quantity: 24,
        },
        {
          product: "glass",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iii",
          quantity: 12,
        },
      ],
    },
    lab_equipment_4_assembly_t2: {
      id: "lab_equipment_4_assembly_t2",
      name: "Lab Equipment 4 Assembly (T2)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iii",
          quantity: 12,
        },
        {
          product: "electronics_ii",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iv",
          quantity: 6,
        },
      ],
    },
    lab_equipment_4_assembly_t3: {
      id: "lab_equipment_4_assembly_t3",
      name: "Lab Equipment 4 Assembly (T3)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iii",
          quantity: 24,
        },
        {
          product: "electronics_ii",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iv",
          quantity: 12,
        },
      ],
    },
    lab_equipment_assembly_t1: {
      id: "lab_equipment_assembly_t1",
      name: "Lab Equipment Assembly (T1)",
      machine: "assembly_electric",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 6,
        },
        {
          product: "electronics",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "lab_equipment",
          quantity: 12,
        },
      ],
    },
    lab_equipment_assembly_t1_2: {
      id: "lab_equipment_assembly_t1_2",
      name: "Lab Equipment Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment",
          quantity: 24,
        },
        {
          product: "liquid_nitrogen",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_ii",
          quantity: 12,
        },
      ],
    },
    lab_equipment_assembly_t2: {
      id: "lab_equipment_assembly_t2",
      name: "Lab Equipment Assembly (T2)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 24,
        },
        {
          product: "electronics",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "lab_equipment",
          quantity: 48,
        },
      ],
    },
    lab_equipment_assembly_t2_2: {
      id: "lab_equipment_assembly_t2_2",
      name: "Lab Equipment Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment",
          quantity: 48,
        },
        {
          product: "liquid_nitrogen",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_ii",
          quantity: 24,
        },
      ],
    },
    lab_equipment_assembly_t3: {
      id: "lab_equipment_assembly_t3",
      name: "Lab Equipment Assembly (T3)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 48,
        },
        {
          product: "electronics",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "lab_equipment",
          quantity: 96,
        },
      ],
    },
    lab_equipment_ii_storage: {
      id: "lab_equipment_ii_storage",
      name: "Lab Equipment II Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_ii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_ii",
          quantity: 4320,
        },
      ],
    },
    lab_equipment_ii_storage_2: {
      id: "lab_equipment_ii_storage_2",
      name: "Lab Equipment II Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_ii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_ii",
          quantity: 2160,
        },
      ],
    },
    lab_equipment_ii_storage_3: {
      id: "lab_equipment_ii_storage_3",
      name: "Lab Equipment II Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_ii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_ii",
          quantity: 360,
        },
      ],
    },
    lab_equipment_ii_storage_4: {
      id: "lab_equipment_ii_storage_4",
      name: "Lab Equipment II Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_ii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_ii",
          quantity: 180,
        },
      ],
    },
    lab_equipment_ii_storage_5: {
      id: "lab_equipment_ii_storage_5",
      name: "Lab Equipment II Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_ii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_ii",
          quantity: 5000,
        },
      ],
    },
    lab_equipment_iii_storage: {
      id: "lab_equipment_iii_storage",
      name: "Lab Equipment III Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iii",
          quantity: 4320,
        },
      ],
    },
    lab_equipment_iii_storage_2: {
      id: "lab_equipment_iii_storage_2",
      name: "Lab Equipment III Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iii",
          quantity: 2160,
        },
      ],
    },
    lab_equipment_iii_storage_3: {
      id: "lab_equipment_iii_storage_3",
      name: "Lab Equipment III Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iii",
          quantity: 360,
        },
      ],
    },
    lab_equipment_iii_storage_4: {
      id: "lab_equipment_iii_storage_4",
      name: "Lab Equipment III Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iii",
          quantity: 180,
        },
      ],
    },
    lab_equipment_iii_storage_5: {
      id: "lab_equipment_iii_storage_5",
      name: "Lab Equipment III Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iii",
          quantity: 5000,
        },
      ],
    },
    lab_equipment_iv_storage: {
      id: "lab_equipment_iv_storage",
      name: "Lab Equipment IV Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iv",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iv",
          quantity: 4320,
        },
      ],
    },
    lab_equipment_iv_storage_2: {
      id: "lab_equipment_iv_storage_2",
      name: "Lab Equipment IV Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iv",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iv",
          quantity: 2160,
        },
      ],
    },
    lab_equipment_iv_storage_3: {
      id: "lab_equipment_iv_storage_3",
      name: "Lab Equipment IV Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iv",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iv",
          quantity: 360,
        },
      ],
    },
    lab_equipment_iv_storage_4: {
      id: "lab_equipment_iv_storage_4",
      name: "Lab Equipment IV Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iv",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iv",
          quantity: 180,
        },
      ],
    },
    lab_equipment_iv_storage_5: {
      id: "lab_equipment_iv_storage_5",
      name: "Lab Equipment IV Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iv",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "lab_equipment_iv",
          quantity: 5000,
        },
      ],
    },
    lab_equipment_storage: {
      id: "lab_equipment_storage",
      name: "Lab Equipment Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "lab_equipment",
          quantity: 4320,
        },
      ],
    },
    lab_equipment_storage_2: {
      id: "lab_equipment_storage_2",
      name: "Lab Equipment Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "lab_equipment",
          quantity: 2160,
        },
      ],
    },
    lab_equipment_storage_3: {
      id: "lab_equipment_storage_3",
      name: "Lab Equipment Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "lab_equipment",
          quantity: 360,
        },
      ],
    },
    lab_equipment_storage_4: {
      id: "lab_equipment_storage_4",
      name: "Lab Equipment Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "lab_equipment",
          quantity: 180,
        },
      ],
    },
    lab_equipment_storage_5: {
      id: "lab_equipment_storage_5",
      name: "Lab Equipment Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "lab_equipment",
          quantity: 5000,
        },
      ],
    },
    light_oil_disposal: {
      id: "light_oil_disposal",
      name: "Light Oil Disposal",
      machine: "flare",
      duration: 60,
      inputs: [
        {
          product: "light_oil",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 24,
        },
      ],
    },
    light_oil_storage: {
      id: "light_oil_storage",
      name: "Light Oil Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "light_oil",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "light_oil",
          quantity: 4320,
        },
      ],
    },
    light_oil_storage_2: {
      id: "light_oil_storage_2",
      name: "Light Oil Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "light_oil",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "light_oil",
          quantity: 2160,
        },
      ],
    },
    light_oil_storage_3: {
      id: "light_oil_storage_3",
      name: "Light Oil Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "light_oil",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "light_oil",
          quantity: 360,
        },
      ],
    },
    light_oil_storage_4: {
      id: "light_oil_storage_4",
      name: "Light Oil Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "light_oil",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "light_oil",
          quantity: 180,
        },
      ],
    },
    limestone_mining: {
      id: "limestone_mining",
      name: "Limestone Mining",
      machine: "limestone_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "limestone",
          quantity: 0,
        },
      ],
    },
    limestone_storage: {
      id: "limestone_storage",
      name: "Limestone Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "limestone",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "limestone",
          quantity: 4320,
        },
      ],
    },
    limestone_storage_2: {
      id: "limestone_storage_2",
      name: "Limestone Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "limestone",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "limestone",
          quantity: 2160,
        },
      ],
    },
    limestone_storage_3: {
      id: "limestone_storage_3",
      name: "Limestone Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "limestone",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "limestone",
          quantity: 360,
        },
      ],
    },
    limestone_storage_4: {
      id: "limestone_storage_4",
      name: "Limestone Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "limestone",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "limestone",
          quantity: 180,
        },
      ],
    },
    liquid_nitrogen_production: {
      id: "liquid_nitrogen_production",
      name: "Liquid Nitrogen Production",
      machine: "chemical_plant",
      duration: 60,
      inputs: [
        {
          product: "nitrogen",
          quantity: 18,
        },
        {
          product: "steel",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "liquid_nitrogen",
          quantity: 12,
        },
      ],
    },
    liquid_nitrogen_production_2: {
      id: "liquid_nitrogen_production_2",
      name: "Liquid Nitrogen Production",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "nitrogen",
          quantity: 36,
        },
        {
          product: "steel",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "liquid_nitrogen",
          quantity: 24,
        },
      ],
    },
    liquid_nitrogen_storage: {
      id: "liquid_nitrogen_storage",
      name: "Liquid Nitrogen Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "liquid_nitrogen",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "liquid_nitrogen",
          quantity: 4320,
        },
      ],
    },
    liquid_nitrogen_storage_2: {
      id: "liquid_nitrogen_storage_2",
      name: "Liquid Nitrogen Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "liquid_nitrogen",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "liquid_nitrogen",
          quantity: 2160,
        },
      ],
    },
    liquid_nitrogen_storage_3: {
      id: "liquid_nitrogen_storage_3",
      name: "Liquid Nitrogen Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "liquid_nitrogen",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "liquid_nitrogen",
          quantity: 360,
        },
      ],
    },
    liquid_nitrogen_storage_4: {
      id: "liquid_nitrogen_storage_4",
      name: "Liquid Nitrogen Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "liquid_nitrogen",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "liquid_nitrogen",
          quantity: 180,
        },
      ],
    },
    liquid_nitrogen_storage_5: {
      id: "liquid_nitrogen_storage_5",
      name: "Liquid Nitrogen Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "liquid_nitrogen",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "liquid_nitrogen",
          quantity: 5000,
        },
      ],
    },
    "lo-press_steam_condensation": {
      id: "lo-press_steam_condensation",
      name: "Lo-press Steam Condensation",
      machine: "cooling_tower",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 12,
        },
      ],
    },
    "lo-press_steam_condensation_2": {
      id: "lo-press_steam_condensation_2",
      name: "Lo-press Steam Condensation",
      machine: "cooling_tower_large",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 96,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 72,
        },
      ],
    },
    maintenance_i: {
      id: "maintenance_i",
      name: "Maintenance I",
      machine: "maintenance_depot_basic",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 6,
        },
        {
          product: "electronics",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "maintenance_i",
          quantity: 105,
        },
      ],
    },
    maintenance_i_2: {
      id: "maintenance_i_2",
      name: "Maintenance I",
      machine: "maintenance_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 24,
        },
        {
          product: "electronics",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "maintenance_i",
          quantity: 480,
        },
      ],
    },
    maintenance_i_3: {
      id: "maintenance_i_3",
      name: "Maintenance I",
      machine: "maintenance_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 24,
        },
        {
          product: "electronics",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "maintenance_i",
          quantity: 480,
        },
        {
          product: "recyclables",
          quantity: 15,
        },
      ],
    },
    maintenance_i_4: {
      id: "maintenance_i_4",
      name: "Maintenance I",
      machine: "maintenance_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 24,
        },
        {
          product: "electronics",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "maintenance_i",
          quantity: 480,
        },
      ],
    },
    maintenance_i_5: {
      id: "maintenance_i_5",
      name: "Maintenance I",
      machine: "maintenance_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 24,
        },
        {
          product: "electronics",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "maintenance_i",
          quantity: 480,
        },
        {
          product: "recyclables",
          quantity: 15,
        },
      ],
    },
    maintenance_i_6: {
      id: "maintenance_i_6",
      name: "Maintenance I",
      machine: "maintenance_depot_basic",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 6,
        },
        {
          product: "electronics",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "maintenance_i",
          quantity: 105,
        },
      ],
    },
    maintenance_ii: {
      id: "maintenance_ii",
      name: "Maintenance II",
      machine: "maintenance_ii_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 12,
        },
        {
          product: "electronics_ii",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "maintenance_ii",
          quantity: 240,
        },
      ],
    },
    maintenance_ii_2: {
      id: "maintenance_ii_2",
      name: "Maintenance II",
      machine: "maintenance_ii_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 12,
        },
        {
          product: "electronics_ii",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "maintenance_ii",
          quantity: 240,
        },
        {
          product: "recyclables",
          quantity: 12,
        },
      ],
    },
    maintenance_ii_3: {
      id: "maintenance_ii_3",
      name: "Maintenance II",
      machine: "maintenance_ii_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 12,
        },
        {
          product: "electronics_ii",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "maintenance_ii",
          quantity: 240,
        },
      ],
    },
    maintenance_ii_4: {
      id: "maintenance_ii_4",
      name: "Maintenance II",
      machine: "maintenance_ii_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 12,
        },
        {
          product: "electronics_ii",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "maintenance_ii",
          quantity: 240,
        },
        {
          product: "recyclables",
          quantity: 12,
        },
      ],
    },
    maintenance_iii: {
      id: "maintenance_iii",
      name: "Maintenance III",
      machine: "maintenance_iii_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 4,
        },
        {
          product: "electronics_iii",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "maintenance_iii",
          quantity: 120,
        },
      ],
    },
    maintenance_iii_2: {
      id: "maintenance_iii_2",
      name: "Maintenance III",
      machine: "maintenance_iii_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 4,
        },
        {
          product: "electronics_iii",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "maintenance_iii",
          quantity: 120,
        },
        {
          product: "recyclables",
          quantity: 8,
        },
      ],
    },
    maintenance_iii_3: {
      id: "maintenance_iii_3",
      name: "Maintenance III",
      machine: "maintenance_iii_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 4,
        },
        {
          product: "electronics_iii",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "maintenance_iii",
          quantity: 120,
        },
      ],
    },
    maintenance_iii_4: {
      id: "maintenance_iii_4",
      name: "Maintenance III",
      machine: "maintenance_iii_depot",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 4,
        },
        {
          product: "electronics_iii",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "maintenance_iii",
          quantity: 120,
        },
        {
          product: "recyclables",
          quantity: 8,
        },
      ],
    },
    meat_processing: {
      id: "meat_processing",
      name: "Meat Processing",
      machine: "food_processor",
      duration: 60,
      inputs: [
        {
          product: "chicken_carcass",
          quantity: 30,
        },
        {
          product: "water",
          quantity: 9,
        },
        {
          product: "salt",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "meat",
          quantity: 15,
        },
        {
          product: "meat_trimmings",
          quantity: 6,
        },
      ],
    },
    meat_storage: {
      id: "meat_storage",
      name: "Meat Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "meat",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "meat",
          quantity: 4320,
        },
      ],
    },
    meat_storage_2: {
      id: "meat_storage_2",
      name: "Meat Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "meat",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "meat",
          quantity: 2160,
        },
      ],
    },
    meat_storage_3: {
      id: "meat_storage_3",
      name: "Meat Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "meat",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "meat",
          quantity: 360,
        },
      ],
    },
    meat_storage_4: {
      id: "meat_storage_4",
      name: "Meat Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "meat",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "meat",
          quantity: 180,
        },
      ],
    },
    meat_storage_5: {
      id: "meat_storage_5",
      name: "Meat Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "meat",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "meat",
          quantity: 5000,
        },
      ],
    },
    meat_trimmings_storage: {
      id: "meat_trimmings_storage",
      name: "Meat Trimmings Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "meat_trimmings",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "meat_trimmings",
          quantity: 4320,
        },
      ],
    },
    meat_trimmings_storage_2: {
      id: "meat_trimmings_storage_2",
      name: "Meat Trimmings Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "meat_trimmings",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "meat_trimmings",
          quantity: 2160,
        },
      ],
    },
    meat_trimmings_storage_3: {
      id: "meat_trimmings_storage_3",
      name: "Meat Trimmings Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "meat_trimmings",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "meat_trimmings",
          quantity: 360,
        },
      ],
    },
    meat_trimmings_storage_4: {
      id: "meat_trimmings_storage_4",
      name: "Meat Trimmings Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "meat_trimmings",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "meat_trimmings",
          quantity: 180,
        },
      ],
    },
    "mech._parts_assembly_t1": {
      id: "mech._parts_assembly_t1",
      name: "Mech. Parts Assembly (T1)",
      machine: "assembly_manual",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 7.5,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 6,
        },
      ],
    },
    "mech._parts_assembly_t2": {
      id: "mech._parts_assembly_t2",
      name: "Mech. Parts Assembly (T2)",
      machine: "assembly_electric",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 15,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 12,
        },
      ],
    },
    "mech._parts_assembly_t3-1": {
      id: "mech._parts_assembly_t3-1",
      name: "Mech. Parts Assembly (T3-1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 15,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 12,
        },
      ],
    },
    "mech._parts_assembly_t3-2": {
      id: "mech._parts_assembly_t3-2",
      name: "Mech. Parts Assembly (T3-2)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 24,
        },
      ],
    },
    "mech._parts_assembly_t4": {
      id: "mech._parts_assembly_t4",
      name: "Mech. Parts Assembly (T4)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 48,
        },
      ],
    },
    mechanical_parts_storage: {
      id: "mechanical_parts_storage",
      name: "Mechanical Parts Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 4320,
        },
      ],
    },
    mechanical_parts_storage_2: {
      id: "mechanical_parts_storage_2",
      name: "Mechanical Parts Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 2160,
        },
      ],
    },
    mechanical_parts_storage_3: {
      id: "mechanical_parts_storage_3",
      name: "Mechanical Parts Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 360,
        },
      ],
    },
    mechanical_parts_storage_4: {
      id: "mechanical_parts_storage_4",
      name: "Mechanical Parts Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 180,
        },
      ],
    },
    mechanical_parts_storage_5: {
      id: "mechanical_parts_storage_5",
      name: "Mechanical Parts Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "mechanical_parts",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "mechanical_parts",
          quantity: 5000,
        },
      ],
    },
    medical_equipment_assembly_t1: {
      id: "medical_equipment_assembly_t1",
      name: "Medical Equipment Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 6,
        },
        {
          product: "plastic",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "medical_equipment",
          quantity: 6,
        },
      ],
    },
    medical_equipment_assembly_t2: {
      id: "medical_equipment_assembly_t2",
      name: "Medical Equipment Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 12,
        },
        {
          product: "plastic",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "medical_equipment",
          quantity: 12,
        },
      ],
    },
    medical_equipment_storage: {
      id: "medical_equipment_storage",
      name: "Medical Equipment Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "medical_equipment",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "medical_equipment",
          quantity: 4320,
        },
      ],
    },
    medical_equipment_storage_2: {
      id: "medical_equipment_storage_2",
      name: "Medical Equipment Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "medical_equipment",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "medical_equipment",
          quantity: 2160,
        },
      ],
    },
    medical_equipment_storage_3: {
      id: "medical_equipment_storage_3",
      name: "Medical Equipment Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "medical_equipment",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "medical_equipment",
          quantity: 360,
        },
      ],
    },
    medical_equipment_storage_4: {
      id: "medical_equipment_storage_4",
      name: "Medical Equipment Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "medical_equipment",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "medical_equipment",
          quantity: 180,
        },
      ],
    },
    medical_equipment_storage_5: {
      id: "medical_equipment_storage_5",
      name: "Medical Equipment Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "medical_equipment",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "medical_equipment",
          quantity: 5000,
        },
      ],
    },
    medical_supplies_assembly_t1: {
      id: "medical_supplies_assembly_t1",
      name: "Medical Supplies Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "medical_equipment",
          quantity: 12,
        },
        {
          product: "disinfectant",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "medical_supplies",
          quantity: 24,
        },
      ],
    },
    medical_supplies_assembly_t1_2: {
      id: "medical_supplies_assembly_t1_2",
      name: "Medical Supplies Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies",
          quantity: 24,
        },
        {
          product: "antibiotics",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_ii",
          quantity: 24,
        },
      ],
    },
    medical_supplies_assembly_t2: {
      id: "medical_supplies_assembly_t2",
      name: "Medical Supplies Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "medical_equipment",
          quantity: 24,
        },
        {
          product: "disinfectant",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "medical_supplies",
          quantity: 48,
        },
      ],
    },
    medical_supplies_assembly_t2_2: {
      id: "medical_supplies_assembly_t2_2",
      name: "Medical Supplies Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies",
          quantity: 48,
        },
        {
          product: "antibiotics",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_ii",
          quantity: 48,
        },
      ],
    },
    medical_supplies_ii_storage: {
      id: "medical_supplies_ii_storage",
      name: "Medical Supplies II Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_ii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_ii",
          quantity: 4320,
        },
      ],
    },
    medical_supplies_ii_storage_2: {
      id: "medical_supplies_ii_storage_2",
      name: "Medical Supplies II Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_ii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_ii",
          quantity: 2160,
        },
      ],
    },
    medical_supplies_ii_storage_3: {
      id: "medical_supplies_ii_storage_3",
      name: "Medical Supplies II Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_ii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_ii",
          quantity: 360,
        },
      ],
    },
    medical_supplies_ii_storage_4: {
      id: "medical_supplies_ii_storage_4",
      name: "Medical Supplies II Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_ii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_ii",
          quantity: 180,
        },
      ],
    },
    medical_supplies_ii_storage_5: {
      id: "medical_supplies_ii_storage_5",
      name: "Medical Supplies II Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_ii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_ii",
          quantity: 5000,
        },
      ],
    },
    medical_supplies_iii_assembly_t1: {
      id: "medical_supplies_iii_assembly_t1",
      name: "Medical Supplies III Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_ii",
          quantity: 24,
        },
        {
          product: "anesthetics",
          quantity: 12,
        },
        {
          product: "morphine",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_iii",
          quantity: 24,
        },
      ],
    },
    medical_supplies_iii_assembly_t2: {
      id: "medical_supplies_iii_assembly_t2",
      name: "Medical Supplies III Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_ii",
          quantity: 48,
        },
        {
          product: "anesthetics",
          quantity: 24,
        },
        {
          product: "morphine",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_iii",
          quantity: 48,
        },
      ],
    },
    medical_supplies_iii_storage: {
      id: "medical_supplies_iii_storage",
      name: "Medical Supplies III Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_iii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_iii",
          quantity: 4320,
        },
      ],
    },
    medical_supplies_iii_storage_2: {
      id: "medical_supplies_iii_storage_2",
      name: "Medical Supplies III Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_iii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_iii",
          quantity: 2160,
        },
      ],
    },
    medical_supplies_iii_storage_3: {
      id: "medical_supplies_iii_storage_3",
      name: "Medical Supplies III Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_iii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_iii",
          quantity: 360,
        },
      ],
    },
    medical_supplies_iii_storage_4: {
      id: "medical_supplies_iii_storage_4",
      name: "Medical Supplies III Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_iii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_iii",
          quantity: 180,
        },
      ],
    },
    medical_supplies_iii_storage_5: {
      id: "medical_supplies_iii_storage_5",
      name: "Medical Supplies III Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies_iii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "medical_supplies_iii",
          quantity: 5000,
        },
      ],
    },
    medical_supplies_storage: {
      id: "medical_supplies_storage",
      name: "Medical Supplies Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "medical_supplies",
          quantity: 4320,
        },
      ],
    },
    medical_supplies_storage_2: {
      id: "medical_supplies_storage_2",
      name: "Medical Supplies Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "medical_supplies",
          quantity: 2160,
        },
      ],
    },
    medical_supplies_storage_3: {
      id: "medical_supplies_storage_3",
      name: "Medical Supplies Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "medical_supplies",
          quantity: 360,
        },
      ],
    },
    medical_supplies_storage_4: {
      id: "medical_supplies_storage_4",
      name: "Medical Supplies Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "medical_supplies",
          quantity: 180,
        },
      ],
    },
    medical_supplies_storage_5: {
      id: "medical_supplies_storage_5",
      name: "Medical Supplies Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "medical_supplies",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "medical_supplies",
          quantity: 5000,
        },
      ],
    },
    medium_oil_storage: {
      id: "medium_oil_storage",
      name: "Medium Oil Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "medium_oil",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "medium_oil",
          quantity: 4320,
        },
      ],
    },
    medium_oil_storage_2: {
      id: "medium_oil_storage_2",
      name: "Medium Oil Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "medium_oil",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "medium_oil",
          quantity: 2160,
        },
      ],
    },
    medium_oil_storage_3: {
      id: "medium_oil_storage_3",
      name: "Medium Oil Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "medium_oil",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "medium_oil",
          quantity: 360,
        },
      ],
    },
    medium_oil_storage_4: {
      id: "medium_oil_storage_4",
      name: "Medium Oil Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "medium_oil",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "medium_oil",
          quantity: 180,
        },
      ],
    },
    microchip_manufacturing_final_stage: {
      id: "microchip_manufacturing_final_stage",
      name: "Microchip Manufacturing Final Stage",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 1.5,
        },
        {
          product: "gold",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips",
          quantity: 6,
        },
      ],
    },
    microchip_manufacturing_final_stage_2: {
      id: "microchip_manufacturing_final_stage_2",
      name: "Microchip Manufacturing Final Stage",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 3,
        },
        {
          product: "gold",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips",
          quantity: 12,
        },
      ],
    },
    microchip_manufacturing_stage_1a: {
      id: "microchip_manufacturing_stage_1a",
      name: "Microchip Manufacturing Stage 1A",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "silicon_wafer",
          quantity: 3,
        },
        {
          product: "acid",
          quantity: 1.5,
        },
        {
          product: "water",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_1a_2: {
      id: "microchip_manufacturing_stage_1a_2",
      name: "Microchip Manufacturing Stage 1A",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "silicon_wafer",
          quantity: 6,
        },
        {
          product: "acid",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_1b: {
      id: "microchip_manufacturing_stage_1b",
      name: "Microchip Manufacturing Stage 1B",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 1.5,
        },
        {
          product: "acid",
          quantity: 1.5,
        },
        {
          product: "water",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_1b_2: {
      id: "microchip_manufacturing_stage_1b_2",
      name: "Microchip Manufacturing Stage 1B",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 3,
        },
        {
          product: "acid",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_1c: {
      id: "microchip_manufacturing_stage_1c",
      name: "Microchip Manufacturing Stage 1C",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 1.5,
        },
        {
          product: "acid",
          quantity: 1.5,
        },
        {
          product: "water",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_1c_2: {
      id: "microchip_manufacturing_stage_1c_2",
      name: "Microchip Manufacturing Stage 1C",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 3,
        },
        {
          product: "acid",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_1d: {
      id: "microchip_manufacturing_stage_1d",
      name: "Microchip Manufacturing Stage 1D",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 1.5,
        },
        {
          product: "acid",
          quantity: 1.5,
        },
        {
          product: "water",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_1d_2: {
      id: "microchip_manufacturing_stage_1d_2",
      name: "Microchip Manufacturing Stage 1D",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 3,
        },
        {
          product: "acid",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_2a: {
      id: "microchip_manufacturing_stage_2a",
      name: "Microchip Manufacturing Stage 2A",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 1.5,
        },
        {
          product: "copper",
          quantity: 1.5,
        },
        {
          product: "plastic",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_2a_2: {
      id: "microchip_manufacturing_stage_2a_2",
      name: "Microchip Manufacturing Stage 2A",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 3,
        },
        {
          product: "copper",
          quantity: 3,
        },
        {
          product: "plastic",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_2b: {
      id: "microchip_manufacturing_stage_2b",
      name: "Microchip Manufacturing Stage 2B",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 1.5,
        },
        {
          product: "copper",
          quantity: 1.5,
        },
        {
          product: "plastic",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_2b_2: {
      id: "microchip_manufacturing_stage_2b_2",
      name: "Microchip Manufacturing Stage 2B",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 3,
        },
        {
          product: "copper",
          quantity: 3,
        },
        {
          product: "plastic",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_2c: {
      id: "microchip_manufacturing_stage_2c",
      name: "Microchip Manufacturing Stage 2C",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 1.5,
        },
        {
          product: "copper",
          quantity: 1.5,
        },
        {
          product: "plastic",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_2c_2: {
      id: "microchip_manufacturing_stage_2c_2",
      name: "Microchip Manufacturing Stage 2C",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 3,
        },
        {
          product: "copper",
          quantity: 3,
        },
        {
          product: "plastic",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_2d: {
      id: "microchip_manufacturing_stage_2d",
      name: "Microchip Manufacturing Stage 2D",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 1.5,
        },
        {
          product: "copper",
          quantity: 1.5,
        },
        {
          product: "plastic",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_2d_2: {
      id: "microchip_manufacturing_stage_2d_2",
      name: "Microchip Manufacturing Stage 2D",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 3,
        },
        {
          product: "copper",
          quantity: 3,
        },
        {
          product: "plastic",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_3a: {
      id: "microchip_manufacturing_stage_3a",
      name: "Microchip Manufacturing Stage 3A",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 1.5,
        },
        {
          product: "gold",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_3a_2: {
      id: "microchip_manufacturing_stage_3a_2",
      name: "Microchip Manufacturing Stage 3A",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 3,
        },
        {
          product: "gold",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_3b: {
      id: "microchip_manufacturing_stage_3b",
      name: "Microchip Manufacturing Stage 3B",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 1.5,
        },
        {
          product: "gold",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_3b_2: {
      id: "microchip_manufacturing_stage_3b_2",
      name: "Microchip Manufacturing Stage 3B",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 3,
        },
        {
          product: "gold",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 3,
        },
      ],
    },
    microchip_manufacturing_stage_3c: {
      id: "microchip_manufacturing_stage_3c",
      name: "Microchip Manufacturing Stage 3C",
      machine: "microchip_machine",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 1.5,
        },
        {
          product: "gold",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 1.5,
        },
      ],
    },
    microchip_manufacturing_stage_3c_2: {
      id: "microchip_manufacturing_stage_3c_2",
      name: "Microchip Manufacturing Stage 3C",
      machine: "microchip_machine_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 3,
        },
        {
          product: "gold",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 3,
        },
      ],
    },
    microchips_stage_1_a_storage: {
      id: "microchips_stage_1_a_storage",
      name: "Microchips Stage 1 A Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_1_a_storage_2: {
      id: "microchips_stage_1_a_storage_2",
      name: "Microchips Stage 1 A Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_1_a_storage_3: {
      id: "microchips_stage_1_a_storage_3",
      name: "Microchips Stage 1 A Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 360,
        },
      ],
    },
    microchips_stage_1_a_storage_4: {
      id: "microchips_stage_1_a_storage_4",
      name: "Microchips Stage 1 A Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 180,
        },
      ],
    },
    microchips_stage_1_a_storage_5: {
      id: "microchips_stage_1_a_storage_5",
      name: "Microchips Stage 1 A Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_a",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_1_b_storage: {
      id: "microchips_stage_1_b_storage",
      name: "Microchips Stage 1 B Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_1_b_storage_2: {
      id: "microchips_stage_1_b_storage_2",
      name: "Microchips Stage 1 B Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_1_b_storage_3: {
      id: "microchips_stage_1_b_storage_3",
      name: "Microchips Stage 1 B Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 360,
        },
      ],
    },
    microchips_stage_1_b_storage_4: {
      id: "microchips_stage_1_b_storage_4",
      name: "Microchips Stage 1 B Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 180,
        },
      ],
    },
    microchips_stage_1_b_storage_5: {
      id: "microchips_stage_1_b_storage_5",
      name: "Microchips Stage 1 B Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_b",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_1_c_storage: {
      id: "microchips_stage_1_c_storage",
      name: "Microchips Stage 1 C Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_1_c_storage_2: {
      id: "microchips_stage_1_c_storage_2",
      name: "Microchips Stage 1 C Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_1_c_storage_3: {
      id: "microchips_stage_1_c_storage_3",
      name: "Microchips Stage 1 C Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 360,
        },
      ],
    },
    microchips_stage_1_c_storage_4: {
      id: "microchips_stage_1_c_storage_4",
      name: "Microchips Stage 1 C Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 180,
        },
      ],
    },
    microchips_stage_1_c_storage_5: {
      id: "microchips_stage_1_c_storage_5",
      name: "Microchips Stage 1 C Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_1_c",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_2_a_storage: {
      id: "microchips_stage_2_a_storage",
      name: "Microchips Stage 2 A Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_2_a_storage_2: {
      id: "microchips_stage_2_a_storage_2",
      name: "Microchips Stage 2 A Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_2_a_storage_3: {
      id: "microchips_stage_2_a_storage_3",
      name: "Microchips Stage 2 A Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 360,
        },
      ],
    },
    microchips_stage_2_a_storage_4: {
      id: "microchips_stage_2_a_storage_4",
      name: "Microchips Stage 2 A Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 180,
        },
      ],
    },
    microchips_stage_2_a_storage_5: {
      id: "microchips_stage_2_a_storage_5",
      name: "Microchips Stage 2 A Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_a",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_2_b_storage: {
      id: "microchips_stage_2_b_storage",
      name: "Microchips Stage 2 B Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_2_b_storage_2: {
      id: "microchips_stage_2_b_storage_2",
      name: "Microchips Stage 2 B Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_2_b_storage_3: {
      id: "microchips_stage_2_b_storage_3",
      name: "Microchips Stage 2 B Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 360,
        },
      ],
    },
    microchips_stage_2_b_storage_4: {
      id: "microchips_stage_2_b_storage_4",
      name: "Microchips Stage 2 B Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 180,
        },
      ],
    },
    microchips_stage_2_b_storage_5: {
      id: "microchips_stage_2_b_storage_5",
      name: "Microchips Stage 2 B Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_b",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_2_c_storage: {
      id: "microchips_stage_2_c_storage",
      name: "Microchips Stage 2 C Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_2_c_storage_2: {
      id: "microchips_stage_2_c_storage_2",
      name: "Microchips Stage 2 C Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_2_c_storage_3: {
      id: "microchips_stage_2_c_storage_3",
      name: "Microchips Stage 2 C Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 360,
        },
      ],
    },
    microchips_stage_2_c_storage_4: {
      id: "microchips_stage_2_c_storage_4",
      name: "Microchips Stage 2 C Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 180,
        },
      ],
    },
    microchips_stage_2_c_storage_5: {
      id: "microchips_stage_2_c_storage_5",
      name: "Microchips Stage 2 C Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_2_c",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_3_a_storage: {
      id: "microchips_stage_3_a_storage",
      name: "Microchips Stage 3 A Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_3_a_storage_2: {
      id: "microchips_stage_3_a_storage_2",
      name: "Microchips Stage 3 A Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_3_a_storage_3: {
      id: "microchips_stage_3_a_storage_3",
      name: "Microchips Stage 3 A Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 360,
        },
      ],
    },
    microchips_stage_3_a_storage_4: {
      id: "microchips_stage_3_a_storage_4",
      name: "Microchips Stage 3 A Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 180,
        },
      ],
    },
    microchips_stage_3_a_storage_5: {
      id: "microchips_stage_3_a_storage_5",
      name: "Microchips Stage 3 A Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_a",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_3_b_storage: {
      id: "microchips_stage_3_b_storage",
      name: "Microchips Stage 3 B Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_3_b_storage_2: {
      id: "microchips_stage_3_b_storage_2",
      name: "Microchips Stage 3 B Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_3_b_storage_3: {
      id: "microchips_stage_3_b_storage_3",
      name: "Microchips Stage 3 B Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 360,
        },
      ],
    },
    microchips_stage_3_b_storage_4: {
      id: "microchips_stage_3_b_storage_4",
      name: "Microchips Stage 3 B Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 180,
        },
      ],
    },
    microchips_stage_3_b_storage_5: {
      id: "microchips_stage_3_b_storage_5",
      name: "Microchips Stage 3 B Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_b",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_3_c_storage: {
      id: "microchips_stage_3_c_storage",
      name: "Microchips Stage 3 C Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_3_c_storage_2: {
      id: "microchips_stage_3_c_storage_2",
      name: "Microchips Stage 3 C Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_3_c_storage_3: {
      id: "microchips_stage_3_c_storage_3",
      name: "Microchips Stage 3 C Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 360,
        },
      ],
    },
    microchips_stage_3_c_storage_4: {
      id: "microchips_stage_3_c_storage_4",
      name: "Microchips Stage 3 C Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 180,
        },
      ],
    },
    microchips_stage_3_c_storage_5: {
      id: "microchips_stage_3_c_storage_5",
      name: "Microchips Stage 3 C Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_3_c",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_4_a_storage: {
      id: "microchips_stage_4_a_storage",
      name: "Microchips Stage 4 A Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_4_a_storage_2: {
      id: "microchips_stage_4_a_storage_2",
      name: "Microchips Stage 4 A Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_4_a_storage_3: {
      id: "microchips_stage_4_a_storage_3",
      name: "Microchips Stage 4 A Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 360,
        },
      ],
    },
    microchips_stage_4_a_storage_4: {
      id: "microchips_stage_4_a_storage_4",
      name: "Microchips Stage 4 A Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 180,
        },
      ],
    },
    microchips_stage_4_a_storage_5: {
      id: "microchips_stage_4_a_storage_5",
      name: "Microchips Stage 4 A Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_a",
          quantity: 5000,
        },
      ],
    },
    microchips_stage_4_b_storage: {
      id: "microchips_stage_4_b_storage",
      name: "Microchips Stage 4 B Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 4320,
        },
      ],
    },
    microchips_stage_4_b_storage_2: {
      id: "microchips_stage_4_b_storage_2",
      name: "Microchips Stage 4 B Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 2160,
        },
      ],
    },
    microchips_stage_4_b_storage_3: {
      id: "microchips_stage_4_b_storage_3",
      name: "Microchips Stage 4 B Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 360,
        },
      ],
    },
    microchips_stage_4_b_storage_4: {
      id: "microchips_stage_4_b_storage_4",
      name: "Microchips Stage 4 B Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 180,
        },
      ],
    },
    microchips_stage_4_b_storage_5: {
      id: "microchips_stage_4_b_storage_5",
      name: "Microchips Stage 4 B Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips_stage_4_b",
          quantity: 5000,
        },
      ],
    },
    microchips_storage: {
      id: "microchips_storage",
      name: "Microchips Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "microchips",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "microchips",
          quantity: 4320,
        },
      ],
    },
    microchips_storage_2: {
      id: "microchips_storage_2",
      name: "Microchips Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "microchips",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "microchips",
          quantity: 2160,
        },
      ],
    },
    microchips_storage_3: {
      id: "microchips_storage_3",
      name: "Microchips Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "microchips",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "microchips",
          quantity: 360,
        },
      ],
    },
    microchips_storage_4: {
      id: "microchips_storage_4",
      name: "Microchips Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "microchips",
          quantity: 180,
        },
      ],
    },
    microchips_storage_5: {
      id: "microchips_storage_5",
      name: "Microchips Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "microchips",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "microchips",
          quantity: 5000,
        },
      ],
    },
    morphine_production: {
      id: "morphine_production",
      name: "Morphine Production",
      machine: "chemical_plant_ii",
      duration: 60,
      inputs: [
        {
          product: "poppy",
          quantity: 12,
        },
        {
          product: "acid",
          quantity: 6,
        },
        {
          product: "glass",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "morphine",
          quantity: 24,
        },
      ],
    },
    morphine_storage: {
      id: "morphine_storage",
      name: "Morphine Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "morphine",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "morphine",
          quantity: 4320,
        },
      ],
    },
    morphine_storage_2: {
      id: "morphine_storage_2",
      name: "Morphine Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "morphine",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "morphine",
          quantity: 2160,
        },
      ],
    },
    morphine_storage_3: {
      id: "morphine_storage_3",
      name: "Morphine Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "morphine",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "morphine",
          quantity: 360,
        },
      ],
    },
    morphine_storage_4: {
      id: "morphine_storage_4",
      name: "Morphine Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "morphine",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "morphine",
          quantity: 180,
        },
      ],
    },
    morphine_storage_5: {
      id: "morphine_storage_5",
      name: "Morphine Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "morphine",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "morphine",
          quantity: 5000,
        },
      ],
    },
    naphtha_disposal: {
      id: "naphtha_disposal",
      name: "Naphtha Disposal",
      machine: "flare",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 24,
        },
      ],
    },
    naphtha_reforming: {
      id: "naphtha_reforming",
      name: "Naphtha Reforming",
      machine: "cracking_unit",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 18,
        },
        {
          product: "hydrogen",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "diesel",
          quantity: 24,
        },
        {
          product: "fuel_gas",
          quantity: 6,
        },
      ],
    },
    naphtha_reforming_2: {
      id: "naphtha_reforming_2",
      name: "Naphtha Reforming",
      machine: "cracking_unit",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 24,
        },
        {
          product: "steam_hi",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "fuel_gas",
          quantity: 30,
        },
        {
          product: "sour_water",
          quantity: 6,
        },
      ],
    },
    naphtha_storage: {
      id: "naphtha_storage",
      name: "Naphtha Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "naphtha",
          quantity: 4320,
        },
      ],
    },
    naphtha_storage_2: {
      id: "naphtha_storage_2",
      name: "Naphtha Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "naphtha",
          quantity: 2160,
        },
      ],
    },
    naphtha_storage_3: {
      id: "naphtha_storage_3",
      name: "Naphtha Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "naphtha",
          quantity: 360,
        },
      ],
    },
    naphtha_storage_4: {
      id: "naphtha_storage_4",
      name: "Naphtha Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "naphtha",
          quantity: 180,
        },
      ],
    },
    nitrogen_storage: {
      id: "nitrogen_storage",
      name: "Nitrogen Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "nitrogen",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "nitrogen",
          quantity: 4320,
        },
      ],
    },
    nitrogen_storage_2: {
      id: "nitrogen_storage_2",
      name: "Nitrogen Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "nitrogen",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "nitrogen",
          quantity: 2160,
        },
      ],
    },
    nitrogen_storage_3: {
      id: "nitrogen_storage_3",
      name: "Nitrogen Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "nitrogen",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "nitrogen",
          quantity: 360,
        },
      ],
    },
    nitrogen_storage_4: {
      id: "nitrogen_storage_4",
      name: "Nitrogen Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "nitrogen",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "nitrogen",
          quantity: 180,
        },
      ],
    },
    nuclearreactor: {
      id: "nuclearreactor",
      name: "NuclearReactor",
      machine: "nuclear_reactor",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 288,
        },
        {
          product: "uranium_rod",
          quantity: 1,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 288,
        },
        {
          product: "spent_fuel",
          quantity: 1,
        },
      ],
    },
    ocean_water_pumping: {
      id: "ocean_water_pumping",
      name: "Ocean Water Pumping",
      machine: "seawater_pump",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "seawater",
          quantity: 120,
        },
      ],
    },
    ocean_water_pumping_ii: {
      id: "ocean_water_pumping_ii",
      name: "Ocean Water Pumping II",
      machine: "seawater_pump_tall",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "seawater",
          quantity: 120,
        },
      ],
    },
    oil_pumping: {
      id: "oil_pumping",
      name: "Oil Pumping",
      machine: "oil_pump",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "crude_oil",
          quantity: 18,
        },
      ],
    },
    oxygen_storage: {
      id: "oxygen_storage",
      name: "Oxygen Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "oxygen",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "oxygen",
          quantity: 4320,
        },
      ],
    },
    oxygen_storage_2: {
      id: "oxygen_storage_2",
      name: "Oxygen Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "oxygen",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "oxygen",
          quantity: 2160,
        },
      ],
    },
    oxygen_storage_3: {
      id: "oxygen_storage_3",
      name: "Oxygen Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "oxygen",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "oxygen",
          quantity: 360,
        },
      ],
    },
    oxygen_storage_4: {
      id: "oxygen_storage_4",
      name: "Oxygen Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "oxygen",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "oxygen",
          quantity: 180,
        },
      ],
    },
    pcb_assembly_t1: {
      id: "pcb_assembly_t1",
      name: "PCB Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 3,
        },
        {
          product: "plastic",
          quantity: 3,
        },
        {
          product: "copper",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "pcb",
          quantity: 6,
        },
      ],
    },
    pcb_assembly_t2: {
      id: "pcb_assembly_t2",
      name: "PCB Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 6,
        },
        {
          product: "plastic",
          quantity: 6,
        },
        {
          product: "copper",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "pcb",
          quantity: 12,
        },
      ],
    },
    pcb_assembly_t3: {
      id: "pcb_assembly_t3",
      name: "PCB Assembly (T3)",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "glass",
          quantity: 12,
        },
        {
          product: "plastic",
          quantity: 12,
        },
        {
          product: "copper",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "pcb",
          quantity: 24,
        },
      ],
    },
    pcb_storage: {
      id: "pcb_storage",
      name: "PCB Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "pcb",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "pcb",
          quantity: 4320,
        },
      ],
    },
    pcb_storage_2: {
      id: "pcb_storage_2",
      name: "PCB Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "pcb",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "pcb",
          quantity: 2160,
        },
      ],
    },
    pcb_storage_3: {
      id: "pcb_storage_3",
      name: "PCB Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "pcb",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "pcb",
          quantity: 360,
        },
      ],
    },
    pcb_storage_4: {
      id: "pcb_storage_4",
      name: "PCB Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "pcb",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "pcb",
          quantity: 180,
        },
      ],
    },
    pcb_storage_5: {
      id: "pcb_storage_5",
      name: "PCB Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "pcb",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "pcb",
          quantity: 5000,
        },
      ],
    },
    plastic_making: {
      id: "plastic_making",
      name: "Plastic Making",
      machine: "polymerization_plant",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 12,
        },
        {
          product: "chlorine",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "plastic",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    plastic_making_2: {
      id: "plastic_making_2",
      name: "Plastic Making",
      machine: "polymerization_plant",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 12,
        },
        {
          product: "chlorine",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "plastic",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    plastic_storage: {
      id: "plastic_storage",
      name: "Plastic Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "plastic",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "plastic",
          quantity: 4320,
        },
      ],
    },
    plastic_storage_2: {
      id: "plastic_storage_2",
      name: "Plastic Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "plastic",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "plastic",
          quantity: 2160,
        },
      ],
    },
    plastic_storage_3: {
      id: "plastic_storage_3",
      name: "Plastic Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "plastic",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "plastic",
          quantity: 360,
        },
      ],
    },
    plastic_storage_4: {
      id: "plastic_storage_4",
      name: "Plastic Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "plastic",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "plastic",
          quantity: 180,
        },
      ],
    },
    plastic_storage_5: {
      id: "plastic_storage_5",
      name: "Plastic Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "plastic",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "plastic",
          quantity: 5000,
        },
      ],
    },
    poppy_storage: {
      id: "poppy_storage",
      name: "Poppy Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "poppy",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "poppy",
          quantity: 4320,
        },
      ],
    },
    poppy_storage_2: {
      id: "poppy_storage_2",
      name: "Poppy Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "poppy",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "poppy",
          quantity: 2160,
        },
      ],
    },
    poppy_storage_3: {
      id: "poppy_storage_3",
      name: "Poppy Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "poppy",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "poppy",
          quantity: 360,
        },
      ],
    },
    poppy_storage_4: {
      id: "poppy_storage_4",
      name: "Poppy Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "poppy",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "poppy",
          quantity: 180,
        },
      ],
    },
    potato_storage: {
      id: "potato_storage",
      name: "Potato Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "potato",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "potato",
          quantity: 4320,
        },
      ],
    },
    potato_storage_2: {
      id: "potato_storage_2",
      name: "Potato Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "potato",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "potato",
          quantity: 2160,
        },
      ],
    },
    potato_storage_3: {
      id: "potato_storage_3",
      name: "Potato Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "potato",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "potato",
          quantity: 360,
        },
      ],
    },
    potato_storage_4: {
      id: "potato_storage_4",
      name: "Potato Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "potato",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "potato",
          quantity: 180,
        },
      ],
    },
    powergeneratort1: {
      id: "powergeneratort1",
      name: "PowerGeneratorT1",
      machine: "power_generator",
      duration: 60,
      inputs: [
        {
          product: "mechanical_power",
          quantity: 500,
        },
      ],
      outputs: [
        {
          product: "electricity",
          quantity: 300,
        },
      ],
    },
    powergeneratort2: {
      id: "powergeneratort2",
      name: "PowerGeneratorT2",
      machine: "power_generator_ii",
      duration: 60,
      inputs: [
        {
          product: "mechanical_power",
          quantity: 3000,
        },
      ],
      outputs: [
        {
          product: "electricity",
          quantity: 2500,
        },
      ],
    },
    product_disposal: {
      id: "product_disposal",
      name: "Product Disposal",
      machine: "smoke_stack",
      duration: 60,
      inputs: [
        {
          product: "steam_depleted",
          quantity: 60,
        },
      ],
      outputs: [],
    },
    product_disposal_10: {
      id: "product_disposal_10",
      name: "Product Disposal",
      machine: "smoke_stack_large",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 600,
        },
      ],
      outputs: [],
    },
    product_disposal_11: {
      id: "product_disposal_11",
      name: "Product Disposal",
      machine: "smoke_stack_large",
      duration: 60,
      inputs: [
        {
          product: "oxygen",
          quantity: 600,
        },
      ],
      outputs: [],
    },
    product_disposal_12: {
      id: "product_disposal_12",
      name: "Product Disposal",
      machine: "smoke_stack_large",
      duration: 60,
      inputs: [
        {
          product: "nitrogen",
          quantity: 600,
        },
      ],
      outputs: [],
    },
    product_disposal_13: {
      id: "product_disposal_13",
      name: "Product Disposal",
      machine: "smoke_stack_large",
      duration: 60,
      inputs: [
        {
          product: "exhaust",
          quantity: 600,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 300,
        },
      ],
    },
    product_disposal_14: {
      id: "product_disposal_14",
      name: "Product Disposal",
      machine: "smoke_stack_large",
      duration: 60,
      inputs: [
        {
          product: "carbon_dioxide",
          quantity: 600,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 150,
        },
      ],
    },
    product_disposal_2: {
      id: "product_disposal_2",
      name: "Product Disposal",
      machine: "smoke_stack",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 60,
        },
      ],
      outputs: [],
    },
    product_disposal_3: {
      id: "product_disposal_3",
      name: "Product Disposal",
      machine: "smoke_stack",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 60,
        },
      ],
      outputs: [],
    },
    product_disposal_4: {
      id: "product_disposal_4",
      name: "Product Disposal",
      machine: "smoke_stack",
      duration: 60,
      inputs: [
        {
          product: "oxygen",
          quantity: 60,
        },
      ],
      outputs: [],
    },
    product_disposal_5: {
      id: "product_disposal_5",
      name: "Product Disposal",
      machine: "smoke_stack",
      duration: 60,
      inputs: [
        {
          product: "nitrogen",
          quantity: 60,
        },
      ],
      outputs: [],
    },
    product_disposal_6: {
      id: "product_disposal_6",
      name: "Product Disposal",
      machine: "smoke_stack",
      duration: 60,
      inputs: [
        {
          product: "exhaust",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 30,
        },
      ],
    },
    product_disposal_7: {
      id: "product_disposal_7",
      name: "Product Disposal",
      machine: "smoke_stack",
      duration: 60,
      inputs: [
        {
          product: "carbon_dioxide",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "air_pollution",
          quantity: 15,
        },
      ],
    },
    product_disposal_8: {
      id: "product_disposal_8",
      name: "Product Disposal",
      machine: "smoke_stack_large",
      duration: 60,
      inputs: [
        {
          product: "steam_depleted",
          quantity: 600,
        },
      ],
      outputs: [],
    },
    product_disposal_9: {
      id: "product_disposal_9",
      name: "Product Disposal",
      machine: "smoke_stack_large",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 600,
        },
      ],
      outputs: [],
    },
    quartz_storage: {
      id: "quartz_storage",
      name: "Quartz Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "quartz",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "quartz",
          quantity: 4320,
        },
      ],
    },
    quartz_storage_2: {
      id: "quartz_storage_2",
      name: "Quartz Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "quartz",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "quartz",
          quantity: 2160,
        },
      ],
    },
    quartz_storage_3: {
      id: "quartz_storage_3",
      name: "Quartz Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "quartz",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "quartz",
          quantity: 360,
        },
      ],
    },
    quartz_storage_4: {
      id: "quartz_storage_4",
      name: "Quartz Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "quartz",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "quartz",
          quantity: 180,
        },
      ],
    },
    recyclables_storage: {
      id: "recyclables_storage",
      name: "Recyclables Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "recyclables",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "recyclables",
          quantity: 4320,
        },
      ],
    },
    recyclables_storage_2: {
      id: "recyclables_storage_2",
      name: "Recyclables Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "recyclables",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "recyclables",
          quantity: 2160,
        },
      ],
    },
    recyclables_storage_3: {
      id: "recyclables_storage_3",
      name: "Recyclables Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "recyclables",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "recyclables",
          quantity: 360,
        },
      ],
    },
    recyclables_storage_4: {
      id: "recyclables_storage_4",
      name: "Recyclables Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "recyclables",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "recyclables",
          quantity: 180,
        },
      ],
    },
    research_lab_ii: {
      id: "research_lab_ii",
      name: "Research Lab II",
      machine: "research_lab_ii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "recyclables",
          quantity: 4,
        },
      ],
    },
    research_lab_iii: {
      id: "research_lab_iii",
      name: "Research Lab III",
      machine: "research_lab_iii",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_ii",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "recyclables",
          quantity: 8,
        },
      ],
    },
    research_lab_iv: {
      id: "research_lab_iv",
      name: "Research Lab IV",
      machine: "research_lab_iv",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iii",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "recyclables",
          quantity: 12,
        },
      ],
    },
    research_lab_v: {
      id: "research_lab_v",
      name: "Research Lab V",
      machine: "research_lab_v",
      duration: 60,
      inputs: [
        {
          product: "lab_equipment_iv",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "recyclables",
          quantity: 16,
        },
      ],
    },
    rock_crushing: {
      id: "rock_crushing",
      name: "Rock Crushing",
      machine: "crusher",
      duration: 60,
      inputs: [
        {
          product: "rock",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "gravel",
          quantity: 24,
        },
      ],
    },
    rock_mining: {
      id: "rock_mining",
      name: "Rock Mining",
      machine: "rock_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "rock",
          quantity: 0,
        },
      ],
    },
    rock_storage: {
      id: "rock_storage",
      name: "Rock Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "rock",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "rock",
          quantity: 4320,
        },
      ],
    },
    rock_storage_2: {
      id: "rock_storage_2",
      name: "Rock Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "rock",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "rock",
          quantity: 2160,
        },
      ],
    },
    rock_storage_3: {
      id: "rock_storage_3",
      name: "Rock Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "rock",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "rock",
          quantity: 360,
        },
      ],
    },
    rock_storage_4: {
      id: "rock_storage_4",
      name: "Rock Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "rock",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "rock",
          quantity: 180,
        },
      ],
    },
    rubber_production: {
      id: "rubber_production",
      name: "Rubber Production",
      machine: "rubber_maker",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 12,
        },
        {
          product: "sulfur",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 18,
        },
      ],
    },
    rubber_production_alt: {
      id: "rubber_production_alt",
      name: "Rubber Production (Alt)",
      machine: "rubber_maker",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 12,
        },
        {
          product: "sulfur",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 18,
        },
      ],
    },
    rubber_production_coal: {
      id: "rubber_production_coal",
      name: "Rubber Production (Coal)",
      machine: "rubber_maker",
      duration: 60,
      inputs: [
        {
          product: "naphtha",
          quantity: 8,
        },
        {
          product: "coal",
          quantity: 2,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 12,
        },
        {
          product: "waste_water",
          quantity: 2,
        },
      ],
    },
    rubber_production_coal_alt: {
      id: "rubber_production_coal_alt",
      name: "Rubber Production (Coal) (Alt)",
      machine: "rubber_maker",
      duration: 60,
      inputs: [
        {
          product: "diesel",
          quantity: 8,
        },
        {
          product: "coal",
          quantity: 2,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 12,
        },
        {
          product: "waste_water",
          quantity: 4,
        },
      ],
    },
    rubber_production_ethanol: {
      id: "rubber_production_ethanol",
      name: "Rubber Production (Ethanol)",
      machine: "rubber_maker",
      duration: 60,
      inputs: [
        {
          product: "ethanol",
          quantity: 12,
        },
        {
          product: "sulfur",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 18,
        },
      ],
    },
    rubber_storage: {
      id: "rubber_storage",
      name: "Rubber Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 4320,
        },
      ],
    },
    rubber_storage_2: {
      id: "rubber_storage_2",
      name: "Rubber Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 2160,
        },
      ],
    },
    rubber_storage_3: {
      id: "rubber_storage_3",
      name: "Rubber Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 360,
        },
      ],
    },
    rubber_storage_4: {
      id: "rubber_storage_4",
      name: "Rubber Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 180,
        },
      ],
    },
    rubber_storage_5: {
      id: "rubber_storage_5",
      name: "Rubber Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "rubber",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "rubber",
          quantity: 5000,
        },
      ],
    },
    salt_making: {
      id: "salt_making",
      name: "Salt Making",
      machine: "evaporation_pond",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 22.5,
        },
      ],
      outputs: [
        {
          product: "salt",
          quantity: 6,
        },
      ],
    },
    salt_making_2: {
      id: "salt_making_2",
      name: "Salt Making",
      machine: "evaporation_pond",
      duration: 60,
      inputs: [
        {
          product: "brine",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "salt",
          quantity: 12,
        },
      ],
    },
    salt_making_3: {
      id: "salt_making_3",
      name: "Salt Making",
      machine: "evaporation_pond_heated",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 45,
        },
      ],
      outputs: [
        {
          product: "salt",
          quantity: 12,
        },
      ],
    },
    salt_making_4: {
      id: "salt_making_4",
      name: "Salt Making",
      machine: "evaporation_pond_heated",
      duration: 60,
      inputs: [
        {
          product: "brine",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "salt",
          quantity: 24,
        },
      ],
    },
    salt_storage: {
      id: "salt_storage",
      name: "Salt Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "salt",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "salt",
          quantity: 4320,
        },
      ],
    },
    salt_storage_2: {
      id: "salt_storage_2",
      name: "Salt Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "salt",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "salt",
          quantity: 2160,
        },
      ],
    },
    salt_storage_3: {
      id: "salt_storage_3",
      name: "Salt Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "salt",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "salt",
          quantity: 360,
        },
      ],
    },
    salt_storage_4: {
      id: "salt_storage_4",
      name: "Salt Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "salt",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "salt",
          quantity: 180,
        },
      ],
    },
    sand_mining: {
      id: "sand_mining",
      name: "Sand Mining",
      machine: "sand_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "sand",
          quantity: 0,
        },
      ],
    },
    sand_storage: {
      id: "sand_storage",
      name: "Sand Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "sand",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "sand",
          quantity: 4320,
        },
      ],
    },
    sand_storage_2: {
      id: "sand_storage_2",
      name: "Sand Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "sand",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "sand",
          quantity: 2160,
        },
      ],
    },
    sand_storage_3: {
      id: "sand_storage_3",
      name: "Sand Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "sand",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "sand",
          quantity: 360,
        },
      ],
    },
    sand_storage_4: {
      id: "sand_storage_4",
      name: "Sand Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "sand",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "sand",
          quantity: 180,
        },
      ],
    },
    sausage_processing: {
      id: "sausage_processing",
      name: "Sausage Processing",
      machine: "food_processor",
      duration: 60,
      inputs: [
        {
          product: "meat_trimmings",
          quantity: 24,
        },
        {
          product: "flour",
          quantity: 6,
        },
        {
          product: "salt",
          quantity: 9,
        },
      ],
      outputs: [
        {
          product: "sausage",
          quantity: 24,
        },
      ],
    },
    sausage_storage: {
      id: "sausage_storage",
      name: "Sausage Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "sausage",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "sausage",
          quantity: 4320,
        },
      ],
    },
    sausage_storage_2: {
      id: "sausage_storage_2",
      name: "Sausage Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "sausage",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "sausage",
          quantity: 2160,
        },
      ],
    },
    sausage_storage_3: {
      id: "sausage_storage_3",
      name: "Sausage Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "sausage",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "sausage",
          quantity: 360,
        },
      ],
    },
    sausage_storage_4: {
      id: "sausage_storage_4",
      name: "Sausage Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "sausage",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "sausage",
          quantity: 180,
        },
      ],
    },
    sausage_storage_5: {
      id: "sausage_storage_5",
      name: "Sausage Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "sausage",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "sausage",
          quantity: 5000,
        },
      ],
    },
    seawater_dumping: {
      id: "seawater_dumping",
      name: "Seawater Dumping",
      machine: "liquid_dump",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 60,
        },
      ],
      outputs: [],
    },
    seawater_storage: {
      id: "seawater_storage",
      name: "Seawater Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "seawater",
          quantity: 4320,
        },
      ],
    },
    seawater_storage_2: {
      id: "seawater_storage_2",
      name: "Seawater Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "seawater",
          quantity: 2160,
        },
      ],
    },
    seawater_storage_3: {
      id: "seawater_storage_3",
      name: "Seawater Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "seawater",
          quantity: 360,
        },
      ],
    },
    seawater_storage_4: {
      id: "seawater_storage_4",
      name: "Seawater Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "seawater",
          quantity: 180,
        },
      ],
    },
    server_assembly_t1: {
      id: "server_assembly_t1",
      name: "Server Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 0.375,
        },
        {
          product: "electronics_iii",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "server",
          quantity: 1.5,
        },
      ],
    },
    server_assembly_t2: {
      id: "server_assembly_t2",
      name: "Server Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 0.75,
        },
        {
          product: "electronics_iii",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "server",
          quantity: 3,
        },
      ],
    },
    server_assembly_t3: {
      id: "server_assembly_t3",
      name: "Server Assembly (T3)",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 1.5,
        },
        {
          product: "electronics_iii",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "server",
          quantity: 6,
        },
      ],
    },
    server_storage: {
      id: "server_storage",
      name: "Server Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "server",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "server",
          quantity: 4320,
        },
      ],
    },
    server_storage_2: {
      id: "server_storage_2",
      name: "Server Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "server",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "server",
          quantity: 2160,
        },
      ],
    },
    server_storage_3: {
      id: "server_storage_3",
      name: "Server Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "server",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "server",
          quantity: 360,
        },
      ],
    },
    server_storage_4: {
      id: "server_storage_4",
      name: "Server Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "server",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "server",
          quantity: 180,
        },
      ],
    },
    server_storage_5: {
      id: "server_storage_5",
      name: "Server Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "server",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "server",
          quantity: 5000,
        },
      ],
    },
    silicon_crystallization: {
      id: "silicon_crystallization",
      name: "Silicon Crystallization",
      machine: "silicon_crystallizer",
      duration: 60,
      inputs: [
        {
          product: "silicon_poly",
          quantity: 18,
        },
        {
          product: "water",
          quantity: 1,
        },
      ],
      outputs: [
        {
          product: "silicon_wafer",
          quantity: 6,
        },
      ],
    },
    silicon_poly_storage: {
      id: "silicon_poly_storage",
      name: "Silicon (Poly) Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "silicon_poly",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "silicon_poly",
          quantity: 4320,
        },
      ],
    },
    silicon_poly_storage_2: {
      id: "silicon_poly_storage_2",
      name: "Silicon (Poly) Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "silicon_poly",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "silicon_poly",
          quantity: 2160,
        },
      ],
    },
    silicon_poly_storage_3: {
      id: "silicon_poly_storage_3",
      name: "Silicon (Poly) Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "silicon_poly",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "silicon_poly",
          quantity: 360,
        },
      ],
    },
    silicon_poly_storage_4: {
      id: "silicon_poly_storage_4",
      name: "Silicon (Poly) Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "silicon_poly",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "silicon_poly",
          quantity: 180,
        },
      ],
    },
    silicon_poly_storage_5: {
      id: "silicon_poly_storage_5",
      name: "Silicon (Poly) Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "silicon_poly",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "silicon_poly",
          quantity: 5000,
        },
      ],
    },
    silicon_smelting_arc: {
      id: "silicon_smelting_arc",
      name: "Silicon Smelting (Arc)",
      machine: "arc_furnace",
      duration: 60,
      inputs: [
        {
          product: "quartz",
          quantity: 24,
        },
        {
          product: "coal",
          quantity: 6,
        },
        {
          product: "graphite",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "molten_silicon",
          quantity: 24,
        },
        {
          product: "slag",
          quantity: 9,
        },
        {
          product: "exhaust",
          quantity: 18,
        },
      ],
    },
    silicon_smelting_arc_ii: {
      id: "silicon_smelting_arc_ii",
      name: "Silicon Smelting (Arc II)",
      machine: "arc_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "quartz",
          quantity: 48,
        },
        {
          product: "coal",
          quantity: 12,
        },
        {
          product: "graphite",
          quantity: 3,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "molten_silicon",
          quantity: 48,
        },
        {
          product: "slag",
          quantity: 18,
        },
        {
          product: "steam_hi",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 36,
        },
      ],
    },
    silicon_treatment: {
      id: "silicon_treatment",
      name: "Silicon Treatment",
      machine: "silicon_reactor",
      duration: 60,
      inputs: [
        {
          product: "molten_silicon",
          quantity: 12,
        },
        {
          product: "hydrogen",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "silicon_poly",
          quantity: 12,
        },
      ],
    },
    silicon_wafer_storage: {
      id: "silicon_wafer_storage",
      name: "Silicon Wafer Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "silicon_wafer",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "silicon_wafer",
          quantity: 4320,
        },
      ],
    },
    silicon_wafer_storage_2: {
      id: "silicon_wafer_storage_2",
      name: "Silicon Wafer Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "silicon_wafer",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "silicon_wafer",
          quantity: 2160,
        },
      ],
    },
    silicon_wafer_storage_3: {
      id: "silicon_wafer_storage_3",
      name: "Silicon Wafer Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "silicon_wafer",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "silicon_wafer",
          quantity: 360,
        },
      ],
    },
    silicon_wafer_storage_4: {
      id: "silicon_wafer_storage_4",
      name: "Silicon Wafer Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "silicon_wafer",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "silicon_wafer",
          quantity: 180,
        },
      ],
    },
    silicon_wafer_storage_5: {
      id: "silicon_wafer_storage_5",
      name: "Silicon Wafer Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "silicon_wafer",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "silicon_wafer",
          quantity: 5000,
        },
      ],
    },
    slag_crushed_mining: {
      id: "slag_crushed_mining",
      name: "Slag Crushed Mining",
      machine: "slag_crushed_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "slag_crushed",
          quantity: 0,
        },
      ],
    },
    slag_crushed_storage: {
      id: "slag_crushed_storage",
      name: "Slag Crushed Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "slag_crushed",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "slag_crushed",
          quantity: 4320,
        },
      ],
    },
    slag_crushed_storage_2: {
      id: "slag_crushed_storage_2",
      name: "Slag Crushed Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "slag_crushed",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "slag_crushed",
          quantity: 2160,
        },
      ],
    },
    slag_crushed_storage_3: {
      id: "slag_crushed_storage_3",
      name: "Slag Crushed Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "slag_crushed",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "slag_crushed",
          quantity: 360,
        },
      ],
    },
    slag_crushed_storage_4: {
      id: "slag_crushed_storage_4",
      name: "Slag Crushed Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "slag_crushed",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "slag_crushed",
          quantity: 180,
        },
      ],
    },
    slag_crushing: {
      id: "slag_crushing",
      name: "Slag Crushing",
      machine: "crusher",
      duration: 60,
      inputs: [
        {
          product: "slag",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "slag_crushed",
          quantity: 24,
        },
      ],
    },
    slag_mining: {
      id: "slag_mining",
      name: "Slag Mining",
      machine: "slag_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "slag",
          quantity: 0,
        },
      ],
    },
    slag_storage: {
      id: "slag_storage",
      name: "Slag Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "slag",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "slag",
          quantity: 4320,
        },
      ],
    },
    slag_storage_2: {
      id: "slag_storage_2",
      name: "Slag Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "slag",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "slag",
          quantity: 2160,
        },
      ],
    },
    slag_storage_3: {
      id: "slag_storage_3",
      name: "Slag Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "slag",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "slag",
          quantity: 360,
        },
      ],
    },
    slag_storage_4: {
      id: "slag_storage_4",
      name: "Slag Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "slag",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "slag",
          quantity: 180,
        },
      ],
    },
    sludge_storage: {
      id: "sludge_storage",
      name: "Sludge Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "sludge",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "sludge",
          quantity: 4320,
        },
      ],
    },
    sludge_storage_2: {
      id: "sludge_storage_2",
      name: "Sludge Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "sludge",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "sludge",
          quantity: 2160,
        },
      ],
    },
    sludge_storage_3: {
      id: "sludge_storage_3",
      name: "Sludge Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "sludge",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "sludge",
          quantity: 360,
        },
      ],
    },
    sludge_storage_4: {
      id: "sludge_storage_4",
      name: "Sludge Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "sludge",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "sludge",
          quantity: 180,
        },
      ],
    },
    snack_production: {
      id: "snack_production",
      name: "Snack Production",
      machine: "food_processor",
      duration: 60,
      inputs: [
        {
          product: "potato",
          quantity: 24,
        },
        {
          product: "salt",
          quantity: 6,
        },
        {
          product: "cooking_oil",
          quantity: 3,
        },
        {
          product: "plastic",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "snack",
          quantity: 36,
        },
        {
          product: "biomass",
          quantity: 3,
        },
      ],
    },
    snack_production_2: {
      id: "snack_production_2",
      name: "Snack Production",
      machine: "food_processor",
      duration: 60,
      inputs: [
        {
          product: "corn",
          quantity: 24,
        },
        {
          product: "salt",
          quantity: 6,
        },
        {
          product: "cooking_oil",
          quantity: 3,
        },
        {
          product: "plastic",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "snack",
          quantity: 48,
        },
        {
          product: "biomass",
          quantity: 3,
        },
      ],
    },
    snack_storage: {
      id: "snack_storage",
      name: "Snack Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "snack",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "snack",
          quantity: 4320,
        },
      ],
    },
    snack_storage_2: {
      id: "snack_storage_2",
      name: "Snack Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "snack",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "snack",
          quantity: 2160,
        },
      ],
    },
    snack_storage_3: {
      id: "snack_storage_3",
      name: "Snack Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "snack",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "snack",
          quantity: 360,
        },
      ],
    },
    snack_storage_4: {
      id: "snack_storage_4",
      name: "Snack Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "snack",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "snack",
          quantity: 180,
        },
      ],
    },
    snack_storage_5: {
      id: "snack_storage_5",
      name: "Snack Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "snack",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "snack",
          quantity: 5000,
        },
      ],
    },
    solar_cell_assembly: {
      id: "solar_cell_assembly",
      name: "Solar Cell Assembly",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 0.5,
        },
        {
          product: "silicon_poly",
          quantity: 6,
        },
        {
          product: "glass",
          quantity: 2,
        },
      ],
      outputs: [
        {
          product: "solar_cell",
          quantity: 4,
        },
      ],
    },
    solar_cell_assembly_2: {
      id: "solar_cell_assembly_2",
      name: "Solar Cell Assembly",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 1,
        },
        {
          product: "silicon_poly",
          quantity: 12,
        },
        {
          product: "glass",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "solar_cell",
          quantity: 8,
        },
      ],
    },
    solar_cell_assembly_3: {
      id: "solar_cell_assembly_3",
      name: "Solar Cell Assembly",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 1.5,
        },
        {
          product: "silicon_poly",
          quantity: 18,
        },
        {
          product: "glass",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "solar_cell",
          quantity: 12,
        },
      ],
    },
    solar_cell_assembly_4: {
      id: "solar_cell_assembly_4",
      name: "Solar Cell Assembly",
      machine: "assembly_robotic_ii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 1,
        },
        {
          product: "silicon_wafer",
          quantity: 12,
        },
        {
          product: "glass",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "solar_cell_mono",
          quantity: 8,
        },
      ],
    },
    solar_cell_mono_storage: {
      id: "solar_cell_mono_storage",
      name: "Solar Cell Mono Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "solar_cell_mono",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "solar_cell_mono",
          quantity: 4320,
        },
      ],
    },
    solar_cell_mono_storage_2: {
      id: "solar_cell_mono_storage_2",
      name: "Solar Cell Mono Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "solar_cell_mono",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "solar_cell_mono",
          quantity: 2160,
        },
      ],
    },
    solar_cell_mono_storage_3: {
      id: "solar_cell_mono_storage_3",
      name: "Solar Cell Mono Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "solar_cell_mono",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "solar_cell_mono",
          quantity: 360,
        },
      ],
    },
    solar_cell_mono_storage_4: {
      id: "solar_cell_mono_storage_4",
      name: "Solar Cell Mono Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "solar_cell_mono",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "solar_cell_mono",
          quantity: 180,
        },
      ],
    },
    solar_cell_mono_storage_5: {
      id: "solar_cell_mono_storage_5",
      name: "Solar Cell Mono Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "solar_cell_mono",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "solar_cell_mono",
          quantity: 5000,
        },
      ],
    },
    solar_cell_storage: {
      id: "solar_cell_storage",
      name: "Solar Cell Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "solar_cell",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "solar_cell",
          quantity: 4320,
        },
      ],
    },
    solar_cell_storage_2: {
      id: "solar_cell_storage_2",
      name: "Solar Cell Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "solar_cell",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "solar_cell",
          quantity: 2160,
        },
      ],
    },
    solar_cell_storage_3: {
      id: "solar_cell_storage_3",
      name: "Solar Cell Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "solar_cell",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "solar_cell",
          quantity: 360,
        },
      ],
    },
    solar_cell_storage_4: {
      id: "solar_cell_storage_4",
      name: "Solar Cell Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "solar_cell",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "solar_cell",
          quantity: 180,
        },
      ],
    },
    solar_cell_storage_5: {
      id: "solar_cell_storage_5",
      name: "Solar Cell Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "solar_cell",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "solar_cell",
          quantity: 5000,
        },
      ],
    },
    sour_water_dumping: {
      id: "sour_water_dumping",
      name: "Sour Water Dumping",
      machine: "liquid_dump",
      duration: 60,
      inputs: [
        {
          product: "sour_water",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "water_pollution",
          quantity: 120,
        },
      ],
    },
    sour_water_storage: {
      id: "sour_water_storage",
      name: "Sour Water Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "sour_water",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "sour_water",
          quantity: 4320,
        },
      ],
    },
    sour_water_storage_2: {
      id: "sour_water_storage_2",
      name: "Sour Water Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "sour_water",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "sour_water",
          quantity: 2160,
        },
      ],
    },
    sour_water_storage_3: {
      id: "sour_water_storage_3",
      name: "Sour Water Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "sour_water",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "sour_water",
          quantity: 360,
        },
      ],
    },
    sour_water_storage_4: {
      id: "sour_water_storage_4",
      name: "Sour Water Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "sour_water",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "sour_water",
          quantity: 180,
        },
      ],
    },
    sour_water_stripping_recovery: {
      id: "sour_water_stripping_recovery",
      name: "Sour Water Stripping (Recovery)",
      machine: "sour_water_stripper",
      duration: 60,
      inputs: [
        {
          product: "sour_water",
          quantity: 36,
        },
        {
          product: "steam_hi",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "sulfur",
          quantity: 12,
        },
        {
          product: "ammonia",
          quantity: 12,
        },
        {
          product: "water",
          quantity: 24,
        },
      ],
    },
    soybean_milling: {
      id: "soybean_milling",
      name: "Soybean Milling",
      machine: "mill",
      duration: 60,
      inputs: [
        {
          product: "soybean",
          quantity: 16,
        },
      ],
      outputs: [
        {
          product: "cooking_oil",
          quantity: 6,
        },
        {
          product: "animal_feed",
          quantity: 8,
        },
      ],
    },
    soybean_storage: {
      id: "soybean_storage",
      name: "Soybean Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "soybean",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "soybean",
          quantity: 4320,
        },
      ],
    },
    soybean_storage_2: {
      id: "soybean_storage_2",
      name: "Soybean Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "soybean",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "soybean",
          quantity: 2160,
        },
      ],
    },
    soybean_storage_3: {
      id: "soybean_storage_3",
      name: "Soybean Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "soybean",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "soybean",
          quantity: 360,
        },
      ],
    },
    soybean_storage_4: {
      id: "soybean_storage_4",
      name: "Soybean Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "soybean",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "soybean",
          quantity: 180,
        },
      ],
    },
    spent_fuel_storage: {
      id: "spent_fuel_storage",
      name: "Spent Fuel Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "spent_fuel",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "spent_fuel",
          quantity: 4320,
        },
      ],
    },
    spent_fuel_storage_2: {
      id: "spent_fuel_storage_2",
      name: "Spent Fuel Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "spent_fuel",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "spent_fuel",
          quantity: 2160,
        },
      ],
    },
    spent_fuel_storage_3: {
      id: "spent_fuel_storage_3",
      name: "Spent Fuel Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "spent_fuel",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "spent_fuel",
          quantity: 360,
        },
      ],
    },
    spent_fuel_storage_4: {
      id: "spent_fuel_storage_4",
      name: "Spent Fuel Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "spent_fuel",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "spent_fuel",
          quantity: 180,
        },
      ],
    },
    spent_fuel_storage_5: {
      id: "spent_fuel_storage_5",
      name: "Spent Fuel Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "spent_fuel",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "spent_fuel",
          quantity: 5000,
        },
      ],
    },
    steam_depleted_storage: {
      id: "steam_depleted_storage",
      name: "Steam Depleted Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "steam_depleted",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "steam_depleted",
          quantity: 4320,
        },
      ],
    },
    steam_depleted_storage_2: {
      id: "steam_depleted_storage_2",
      name: "Steam Depleted Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "steam_depleted",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "steam_depleted",
          quantity: 2160,
        },
      ],
    },
    steam_depleted_storage_3: {
      id: "steam_depleted_storage_3",
      name: "Steam Depleted Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "steam_depleted",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "steam_depleted",
          quantity: 360,
        },
      ],
    },
    steam_depleted_storage_4: {
      id: "steam_depleted_storage_4",
      name: "Steam Depleted Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "steam_depleted",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "steam_depleted",
          quantity: 180,
        },
      ],
    },
    steam_generation: {
      id: "steam_generation",
      name: "Steam Generation",
      machine: "boiler_coal",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "coal",
          quantity: 18,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 36,
        },
      ],
    },
    steam_generation_10: {
      id: "steam_generation_10",
      name: "Steam Generation",
      machine: "boiler_gas",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "hydrogen",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "steam_depleted",
          quantity: 12,
        },
      ],
    },
    steam_generation_11: {
      id: "steam_generation_11",
      name: "Steam Generation",
      machine: "boiler_electric",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 24,
        },
      ],
    },
    steam_generation_2: {
      id: "steam_generation_2",
      name: "Steam Generation",
      machine: "boiler_coal",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "biomass",
          quantity: 72,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    steam_generation_3: {
      id: "steam_generation_3",
      name: "Steam Generation",
      machine: "boiler_coal",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "animal_feed",
          quantity: 72,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    steam_generation_4: {
      id: "steam_generation_4",
      name: "Steam Generation",
      machine: "boiler_gas",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "heavy_oil",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 60,
        },
      ],
    },
    steam_generation_5: {
      id: "steam_generation_5",
      name: "Steam Generation",
      machine: "boiler_gas",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "medium_oil",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 60,
        },
      ],
    },
    steam_generation_6: {
      id: "steam_generation_6",
      name: "Steam Generation",
      machine: "boiler_gas",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "light_oil",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 48,
        },
      ],
    },
    steam_generation_7: {
      id: "steam_generation_7",
      name: "Steam Generation",
      machine: "boiler_gas",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "naphtha",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "exhaust",
          quantity: 48,
        },
      ],
    },
    steam_generation_8: {
      id: "steam_generation_8",
      name: "Steam Generation",
      machine: "boiler_gas",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "ethanol",
          quantity: 36,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "carbon_dioxide",
          quantity: 48,
        },
      ],
    },
    steam_generation_9: {
      id: "steam_generation_9",
      name: "Steam Generation",
      machine: "boiler_gas",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "fuel_gas",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
        {
          product: "carbon_dioxide",
          quantity: 48,
        },
      ],
    },
    steam_hi_storage: {
      id: "steam_hi_storage",
      name: "Steam Hi Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 4320,
        },
      ],
    },
    steam_hi_storage_2: {
      id: "steam_hi_storage_2",
      name: "Steam Hi Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 2160,
        },
      ],
    },
    steam_hi_storage_3: {
      id: "steam_hi_storage_3",
      name: "Steam Hi Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 360,
        },
      ],
    },
    steam_hi_storage_4: {
      id: "steam_hi_storage_4",
      name: "Steam Hi Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "steam_hi",
          quantity: 180,
        },
      ],
    },
    steam_lo_storage: {
      id: "steam_lo_storage",
      name: "Steam Lo Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "steam_lo",
          quantity: 4320,
        },
      ],
    },
    steam_lo_storage_2: {
      id: "steam_lo_storage_2",
      name: "Steam Lo Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "steam_lo",
          quantity: 2160,
        },
      ],
    },
    steam_lo_storage_3: {
      id: "steam_lo_storage_3",
      name: "Steam Lo Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "steam_lo",
          quantity: 360,
        },
      ],
    },
    steam_lo_storage_4: {
      id: "steam_lo_storage_4",
      name: "Steam Lo Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "steam_lo",
          quantity: 180,
        },
      ],
    },
    steel_casting_cooled: {
      id: "steel_casting_cooled",
      name: "Steel Casting (Cooled)",
      machine: "cooled_caster",
      duration: 60,
      inputs: [
        {
          product: "molten_steel",
          quantity: 12,
        },
        {
          product: "water",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "steel",
          quantity: 12,
        },
      ],
    },
    steel_casting_cooled_2: {
      id: "steel_casting_cooled_2",
      name: "Steel Casting (Cooled)",
      machine: "cooled_caster_ii",
      duration: 60,
      inputs: [
        {
          product: "molten_steel",
          quantity: 24,
        },
        {
          product: "water",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "steel",
          quantity: 24,
        },
      ],
    },
    steel_smelting: {
      id: "steel_smelting",
      name: "Steel Smelting",
      machine: "oxygen_furnace",
      duration: 60,
      inputs: [
        {
          product: "molten_iron",
          quantity: 24,
        },
        {
          product: "oxygen",
          quantity: 18,
        },
      ],
      outputs: [
        {
          product: "molten_steel",
          quantity: 12,
        },
        {
          product: "exhaust",
          quantity: 24,
        },
      ],
    },
    steel_smelting_2: {
      id: "steel_smelting_2",
      name: "Steel Smelting",
      machine: "oxygen_furnace_ii",
      duration: 60,
      inputs: [
        {
          product: "molten_iron",
          quantity: 48,
        },
        {
          product: "oxygen",
          quantity: 18,
        },
      ],
      outputs: [
        {
          product: "molten_steel",
          quantity: 24,
        },
        {
          product: "exhaust",
          quantity: 36,
        },
      ],
    },
    steel_storage: {
      id: "steel_storage",
      name: "Steel Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "steel",
          quantity: 4320,
        },
      ],
    },
    steel_storage_2: {
      id: "steel_storage_2",
      name: "Steel Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "steel",
          quantity: 2160,
        },
      ],
    },
    steel_storage_3: {
      id: "steel_storage_3",
      name: "Steel Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "steel",
          quantity: 360,
        },
      ],
    },
    steel_storage_4: {
      id: "steel_storage_4",
      name: "Steel Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "steel",
          quantity: 180,
        },
      ],
    },
    steel_storage_5: {
      id: "steel_storage_5",
      name: "Steel Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "steel",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "steel",
          quantity: 5000,
        },
      ],
    },
    sugar_cane_storage: {
      id: "sugar_cane_storage",
      name: "Sugar Cane Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "sugar_cane",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "sugar_cane",
          quantity: 4320,
        },
      ],
    },
    sugar_cane_storage_2: {
      id: "sugar_cane_storage_2",
      name: "Sugar Cane Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "sugar_cane",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "sugar_cane",
          quantity: 2160,
        },
      ],
    },
    sugar_cane_storage_3: {
      id: "sugar_cane_storage_3",
      name: "Sugar Cane Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "sugar_cane",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "sugar_cane",
          quantity: 360,
        },
      ],
    },
    sugar_cane_storage_4: {
      id: "sugar_cane_storage_4",
      name: "Sugar Cane Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "sugar_cane",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "sugar_cane",
          quantity: 180,
        },
      ],
    },
    sugar_refining_cane: {
      id: "sugar_refining_cane",
      name: "Sugar Refining (Cane)",
      machine: "food_processor",
      duration: 60,
      inputs: [
        {
          product: "sugar_cane",
          quantity: 15,
        },
        {
          product: "water",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "sugar",
          quantity: 12,
        },
        {
          product: "biomass",
          quantity: 3,
        },
      ],
    },
    sugar_storage: {
      id: "sugar_storage",
      name: "Sugar Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "sugar",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "sugar",
          quantity: 4320,
        },
      ],
    },
    sugar_storage_2: {
      id: "sugar_storage_2",
      name: "Sugar Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "sugar",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "sugar",
          quantity: 2160,
        },
      ],
    },
    sugar_storage_3: {
      id: "sugar_storage_3",
      name: "Sugar Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "sugar",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "sugar",
          quantity: 360,
        },
      ],
    },
    sugar_storage_4: {
      id: "sugar_storage_4",
      name: "Sugar Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "sugar",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "sugar",
          quantity: 180,
        },
      ],
    },
    sulfur_neutralization: {
      id: "sulfur_neutralization",
      name: "Sulfur Neutralization",
      machine: "mixer",
      duration: 60,
      inputs: [
        {
          product: "sulfur",
          quantity: 24,
        },
        {
          product: "limestone",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "slag",
          quantity: 12,
        },
      ],
    },
    sulfur_storage: {
      id: "sulfur_storage",
      name: "Sulfur Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "sulfur",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "sulfur",
          quantity: 4320,
        },
      ],
    },
    sulfur_storage_2: {
      id: "sulfur_storage_2",
      name: "Sulfur Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "sulfur",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "sulfur",
          quantity: 2160,
        },
      ],
    },
    sulfur_storage_3: {
      id: "sulfur_storage_3",
      name: "Sulfur Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "sulfur",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "sulfur",
          quantity: 360,
        },
      ],
    },
    sulfur_storage_4: {
      id: "sulfur_storage_4",
      name: "Sulfur Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "sulfur",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "sulfur",
          quantity: 180,
        },
      ],
    },
    thermal_desalination: {
      id: "thermal_desalination",
      name: "Thermal Desalination",
      machine: "thermal_desalinator",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 60,
        },
        {
          product: "steam_hi",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 48,
        },
        {
          product: "brine",
          quantity: 24,
        },
      ],
    },
    thermal_desalination_2: {
      id: "thermal_desalination_2",
      name: "Thermal Desalination",
      machine: "thermal_desalinator",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 21,
        },
        {
          product: "steam_lo",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 24,
        },
        {
          product: "brine",
          quantity: 9,
        },
      ],
    },
    thermal_desalination_3: {
      id: "thermal_desalination_3",
      name: "Thermal Desalination",
      machine: "thermal_desalinator",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 6,
        },
        {
          product: "steam_depleted",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 15,
        },
        {
          product: "brine",
          quantity: 3,
        },
      ],
    },
    tofu_making: {
      id: "tofu_making",
      name: "Tofu Making",
      machine: "food_processor",
      duration: 60,
      inputs: [
        {
          product: "soybean",
          quantity: 9,
        },
        {
          product: "water",
          quantity: 6,
        },
        {
          product: "sulfur",
          quantity: 1.5,
        },
        {
          product: "limestone",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "tofu",
          quantity: 12,
        },
        {
          product: "animal_feed",
          quantity: 4.5,
        },
      ],
    },
    tofu_storage: {
      id: "tofu_storage",
      name: "Tofu Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "tofu",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "tofu",
          quantity: 4320,
        },
      ],
    },
    tofu_storage_2: {
      id: "tofu_storage_2",
      name: "Tofu Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "tofu",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "tofu",
          quantity: 2160,
        },
      ],
    },
    tofu_storage_3: {
      id: "tofu_storage_3",
      name: "Tofu Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "tofu",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "tofu",
          quantity: 360,
        },
      ],
    },
    tofu_storage_4: {
      id: "tofu_storage_4",
      name: "Tofu Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "tofu",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "tofu",
          quantity: 180,
        },
      ],
    },
    tofu_storage_5: {
      id: "tofu_storage_5",
      name: "Tofu Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "tofu",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "tofu",
          quantity: 5000,
        },
      ],
    },
    toxic_slurry_dumping: {
      id: "toxic_slurry_dumping",
      name: "Toxic Slurry Dumping",
      machine: "liquid_dump",
      duration: 60,
      inputs: [
        {
          product: "toxic_slurry",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "water_pollution",
          quantity: 150,
        },
      ],
    },
    toxic_slurry_storage: {
      id: "toxic_slurry_storage",
      name: "Toxic Slurry Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "toxic_slurry",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "toxic_slurry",
          quantity: 4320,
        },
      ],
    },
    toxic_slurry_storage_2: {
      id: "toxic_slurry_storage_2",
      name: "Toxic Slurry Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "toxic_slurry",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "toxic_slurry",
          quantity: 2160,
        },
      ],
    },
    toxic_slurry_storage_3: {
      id: "toxic_slurry_storage_3",
      name: "Toxic Slurry Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "toxic_slurry",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "toxic_slurry",
          quantity: 360,
        },
      ],
    },
    toxic_slurry_storage_4: {
      id: "toxic_slurry_storage_4",
      name: "Toxic Slurry Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "toxic_slurry",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "toxic_slurry",
          quantity: 180,
        },
      ],
    },
    toxic_slurry_treatment: {
      id: "toxic_slurry_treatment",
      name: "Toxic Slurry Treatment",
      machine: "wastewater_treatment",
      duration: 60,
      inputs: [
        {
          product: "toxic_slurry",
          quantity: 48,
        },
        {
          product: "filter_media",
          quantity: 4,
        },
        {
          product: "brine",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 40,
        },
        {
          product: "slag",
          quantity: 12,
        },
      ],
    },
    turbinehighpress: {
      id: "turbinehighpress",
      name: "TurbineHighPress",
      machine: "high-pressure_turbine",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 24,
        },
      ],
      outputs: [
        {
          product: "mechanical_power",
          quantity: 6000,
        },
        {
          product: "steam_lo",
          quantity: 24,
        },
      ],
    },
    turbinehighpresst2: {
      id: "turbinehighpresst2",
      name: "TurbineHighPressT2",
      machine: "high-pressure_turbine_ii",
      duration: 60,
      inputs: [
        {
          product: "steam_hi",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "mechanical_power",
          quantity: 12000,
        },
        {
          product: "steam_lo",
          quantity: 48,
        },
      ],
    },
    turbinelowpress: {
      id: "turbinelowpress",
      name: "TurbineLowPress",
      machine: "low-pressure_turbine",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 48,
        },
      ],
      outputs: [
        {
          product: "mechanical_power",
          quantity: 6000,
        },
        {
          product: "steam_depleted",
          quantity: 48,
        },
      ],
    },
    turbinelowpresst2: {
      id: "turbinelowpresst2",
      name: "TurbineLowPressT2",
      machine: "low-pressure_turbine_ii",
      duration: 60,
      inputs: [
        {
          product: "steam_lo",
          quantity: 96,
        },
      ],
      outputs: [
        {
          product: "mechanical_power",
          quantity: 12000,
        },
        {
          product: "steam_depleted",
          quantity: 96,
        },
      ],
    },
    uranium_crushing: {
      id: "uranium_crushing",
      name: "Uranium Crushing",
      machine: "crusher",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 12,
        },
      ],
    },
    uranium_enrichment: {
      id: "uranium_enrichment",
      name: "Uranium Enrichment",
      machine: "enrichment_plant",
      duration: 60,
      inputs: [
        {
          product: "yellow_cake",
          quantity: 3,
        },
        {
          product: "hydrogen_fluoride",
          quantity: 1,
        },
      ],
      outputs: [
        {
          product: "uranium_pellets",
          quantity: 3,
        },
      ],
    },
    uranium_leaching: {
      id: "uranium_leaching",
      name: "Uranium Leaching",
      machine: "settling_tank",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 12,
        },
        {
          product: "acid",
          quantity: 4,
        },
      ],
      outputs: [
        {
          product: "yellow_cake",
          quantity: 6,
        },
        {
          product: "toxic_slurry",
          quantity: 6,
        },
      ],
    },
    uranium_ore_crushed_storage: {
      id: "uranium_ore_crushed_storage",
      name: "Uranium Ore Crushed Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 4320,
        },
      ],
    },
    uranium_ore_crushed_storage_2: {
      id: "uranium_ore_crushed_storage_2",
      name: "Uranium Ore Crushed Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 2160,
        },
      ],
    },
    uranium_ore_crushed_storage_3: {
      id: "uranium_ore_crushed_storage_3",
      name: "Uranium Ore Crushed Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 360,
        },
      ],
    },
    uranium_ore_crushed_storage_4: {
      id: "uranium_ore_crushed_storage_4",
      name: "Uranium Ore Crushed Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "uranium_ore_crushed",
          quantity: 180,
        },
      ],
    },
    uranium_ore_storage: {
      id: "uranium_ore_storage",
      name: "Uranium Ore Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "uranium_ore",
          quantity: 4320,
        },
      ],
    },
    uranium_ore_storage_2: {
      id: "uranium_ore_storage_2",
      name: "Uranium Ore Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "uranium_ore",
          quantity: 2160,
        },
      ],
    },
    uranium_ore_storage_3: {
      id: "uranium_ore_storage_3",
      name: "Uranium Ore Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "uranium_ore",
          quantity: 360,
        },
      ],
    },
    uranium_ore_storage_4: {
      id: "uranium_ore_storage_4",
      name: "Uranium Ore Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "uranium_ore",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "uranium_ore",
          quantity: 180,
        },
      ],
    },
    uranium_pellets_storage: {
      id: "uranium_pellets_storage",
      name: "Uranium Pellets Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "uranium_pellets",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "uranium_pellets",
          quantity: 4320,
        },
      ],
    },
    uranium_pellets_storage_2: {
      id: "uranium_pellets_storage_2",
      name: "Uranium Pellets Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "uranium_pellets",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "uranium_pellets",
          quantity: 2160,
        },
      ],
    },
    uranium_pellets_storage_3: {
      id: "uranium_pellets_storage_3",
      name: "Uranium Pellets Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "uranium_pellets",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "uranium_pellets",
          quantity: 360,
        },
      ],
    },
    uranium_pellets_storage_4: {
      id: "uranium_pellets_storage_4",
      name: "Uranium Pellets Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "uranium_pellets",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "uranium_pellets",
          quantity: 180,
        },
      ],
    },
    uranium_pellets_storage_5: {
      id: "uranium_pellets_storage_5",
      name: "Uranium Pellets Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "uranium_pellets",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "uranium_pellets",
          quantity: 5000,
        },
      ],
    },
    uranium_rod_storage: {
      id: "uranium_rod_storage",
      name: "Uranium Rod Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "uranium_rod",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "uranium_rod",
          quantity: 4320,
        },
      ],
    },
    uranium_rod_storage_2: {
      id: "uranium_rod_storage_2",
      name: "Uranium Rod Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "uranium_rod",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "uranium_rod",
          quantity: 2160,
        },
      ],
    },
    uranium_rod_storage_3: {
      id: "uranium_rod_storage_3",
      name: "Uranium Rod Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "uranium_rod",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "uranium_rod",
          quantity: 360,
        },
      ],
    },
    uranium_rod_storage_4: {
      id: "uranium_rod_storage_4",
      name: "Uranium Rod Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "uranium_rod",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "uranium_rod",
          quantity: 180,
        },
      ],
    },
    uranium_rod_storage_5: {
      id: "uranium_rod_storage_5",
      name: "Uranium Rod Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "uranium_rod",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "uranium_rod",
          quantity: 5000,
        },
      ],
    },
    uranium_rods_t1: {
      id: "uranium_rods_t1",
      name: "Uranium Rods (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "uranium_pellets",
          quantity: 12,
        },
        {
          product: "steel",
          quantity: 0.3333333333333333,
        },
      ],
      outputs: [
        {
          product: "uranium_rod",
          quantity: 2,
        },
      ],
    },
    vegetables_storage: {
      id: "vegetables_storage",
      name: "Vegetables Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "vegetables",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "vegetables",
          quantity: 4320,
        },
      ],
    },
    vegetables_storage_2: {
      id: "vegetables_storage_2",
      name: "Vegetables Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "vegetables",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "vegetables",
          quantity: 2160,
        },
      ],
    },
    vegetables_storage_3: {
      id: "vegetables_storage_3",
      name: "Vegetables Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "vegetables",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "vegetables",
          quantity: 360,
        },
      ],
    },
    vegetables_storage_4: {
      id: "vegetables_storage_4",
      name: "Vegetables Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "vegetables",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "vegetables",
          quantity: 180,
        },
      ],
    },
    vegetables_storage_5: {
      id: "vegetables_storage_5",
      name: "Vegetables Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "vegetables",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "vegetables",
          quantity: 5000,
        },
      ],
    },
    vehicle_parts_2_assembly_t1: {
      id: "vehicle_parts_2_assembly_t1",
      name: "Vehicle Parts 2 Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts",
          quantity: 6,
        },
        {
          product: "steel",
          quantity: 3,
        },
        {
          product: "glass",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 6,
        },
      ],
    },
    vehicle_parts_2_assembly_t2: {
      id: "vehicle_parts_2_assembly_t2",
      name: "Vehicle Parts 2 Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts",
          quantity: 12,
        },
        {
          product: "steel",
          quantity: 6,
        },
        {
          product: "glass",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 12,
        },
      ],
    },
    vehicle_parts_3_assembly_t1: {
      id: "vehicle_parts_3_assembly_t1",
      name: "Vehicle Parts 3 Assembly (T1)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 6,
        },
        {
          product: "electronics_ii",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 6,
        },
      ],
    },
    vehicle_parts_3_assembly_t2: {
      id: "vehicle_parts_3_assembly_t2",
      name: "Vehicle Parts 3 Assembly (T2)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 12,
        },
        {
          product: "electronics_ii",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 12,
        },
      ],
    },
    vehicle_parts_assembly_t1: {
      id: "vehicle_parts_assembly_t1",
      name: "Vehicle Parts Assembly (T1)",
      machine: "assembly_manual",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 3,
        },
        {
          product: "mechanical_parts",
          quantity: 1.5,
        },
        {
          product: "electronics",
          quantity: 1.5,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 3,
        },
      ],
    },
    vehicle_parts_assembly_t2: {
      id: "vehicle_parts_assembly_t2",
      name: "Vehicle Parts Assembly (T2)",
      machine: "assembly_electric",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 6,
        },
        {
          product: "mechanical_parts",
          quantity: 3,
        },
        {
          product: "electronics",
          quantity: 3,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 6,
        },
      ],
    },
    vehicle_parts_assembly_t3: {
      id: "vehicle_parts_assembly_t3",
      name: "Vehicle Parts Assembly (T3)",
      machine: "assembly_electric_ii",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 12,
        },
        {
          product: "mechanical_parts",
          quantity: 6,
        },
        {
          product: "electronics",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 12,
        },
      ],
    },
    vehicle_parts_assembly_t4: {
      id: "vehicle_parts_assembly_t4",
      name: "Vehicle Parts Assembly (T4)",
      machine: "assembly_robotic",
      duration: 60,
      inputs: [
        {
          product: "iron",
          quantity: 24,
        },
        {
          product: "mechanical_parts",
          quantity: 12,
        },
        {
          product: "electronics",
          quantity: 12,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 24,
        },
      ],
    },
    vehicle_parts_ii_storage: {
      id: "vehicle_parts_ii_storage",
      name: "Vehicle Parts II Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 4320,
        },
      ],
    },
    vehicle_parts_ii_storage_2: {
      id: "vehicle_parts_ii_storage_2",
      name: "Vehicle Parts II Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 2160,
        },
      ],
    },
    vehicle_parts_ii_storage_3: {
      id: "vehicle_parts_ii_storage_3",
      name: "Vehicle Parts II Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 360,
        },
      ],
    },
    vehicle_parts_ii_storage_4: {
      id: "vehicle_parts_ii_storage_4",
      name: "Vehicle Parts II Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 180,
        },
      ],
    },
    vehicle_parts_ii_storage_5: {
      id: "vehicle_parts_ii_storage_5",
      name: "Vehicle Parts II Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_ii",
          quantity: 5000,
        },
      ],
    },
    vehicle_parts_iii_storage: {
      id: "vehicle_parts_iii_storage",
      name: "Vehicle Parts III Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 4320,
        },
      ],
    },
    vehicle_parts_iii_storage_2: {
      id: "vehicle_parts_iii_storage_2",
      name: "Vehicle Parts III Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 2160,
        },
      ],
    },
    vehicle_parts_iii_storage_3: {
      id: "vehicle_parts_iii_storage_3",
      name: "Vehicle Parts III Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 360,
        },
      ],
    },
    vehicle_parts_iii_storage_4: {
      id: "vehicle_parts_iii_storage_4",
      name: "Vehicle Parts III Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 180,
        },
      ],
    },
    vehicle_parts_iii_storage_5: {
      id: "vehicle_parts_iii_storage_5",
      name: "Vehicle Parts III Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts_iii",
          quantity: 5000,
        },
      ],
    },
    vehicle_parts_storage: {
      id: "vehicle_parts_storage",
      name: "Vehicle Parts Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 4320,
        },
      ],
    },
    vehicle_parts_storage_2: {
      id: "vehicle_parts_storage_2",
      name: "Vehicle Parts Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 2160,
        },
      ],
    },
    vehicle_parts_storage_3: {
      id: "vehicle_parts_storage_3",
      name: "Vehicle Parts Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 360,
        },
      ],
    },
    vehicle_parts_storage_4: {
      id: "vehicle_parts_storage_4",
      name: "Vehicle Parts Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 180,
        },
      ],
    },
    vehicle_parts_storage_5: {
      id: "vehicle_parts_storage_5",
      name: "Vehicle Parts Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "vehicle_parts",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "vehicle_parts",
          quantity: 5000,
        },
      ],
    },
    waste_mining: {
      id: "waste_mining",
      name: "Waste Mining",
      machine: "waste_mine",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "waste",
          quantity: 0,
        },
      ],
    },
    waste_storage: {
      id: "waste_storage",
      name: "Waste Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "waste",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "waste",
          quantity: 4320,
        },
      ],
    },
    waste_storage_2: {
      id: "waste_storage_2",
      name: "Waste Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "waste",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "waste",
          quantity: 2160,
        },
      ],
    },
    waste_storage_3: {
      id: "waste_storage_3",
      name: "Waste Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "waste",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "waste",
          quantity: 360,
        },
      ],
    },
    waste_storage_4: {
      id: "waste_storage_4",
      name: "Waste Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "waste",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "waste",
          quantity: 180,
        },
      ],
    },
    waste_water_dumping: {
      id: "waste_water_dumping",
      name: "Waste Water Dumping",
      machine: "liquid_dump",
      duration: 60,
      inputs: [
        {
          product: "waste_water",
          quantity: 60,
        },
      ],
      outputs: [
        {
          product: "water_pollution",
          quantity: 60,
        },
      ],
    },
    waste_water_storage: {
      id: "waste_water_storage",
      name: "Waste Water Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "waste_water",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "waste_water",
          quantity: 4320,
        },
      ],
    },
    waste_water_storage_2: {
      id: "waste_water_storage_2",
      name: "Waste Water Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "waste_water",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "waste_water",
          quantity: 2160,
        },
      ],
    },
    waste_water_storage_3: {
      id: "waste_water_storage_3",
      name: "Waste Water Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "waste_water",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "waste_water",
          quantity: 360,
        },
      ],
    },
    waste_water_storage_4: {
      id: "waste_water_storage_4",
      name: "Waste Water Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "waste_water",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "waste_water",
          quantity: 180,
        },
      ],
    },
    wastesortingplant: {
      id: "wastesortingplant",
      name: "WasteSortingPlant",
      machine: "waste_sorting_plant",
      duration: 60,
      inputs: [
        {
          product: "recyclables",
          quantity: 144,
        },
      ],
      outputs: [
        {
          product: "iron_scrap",
          quantity: 0,
        },
        {
          product: "copper_scrap",
          quantity: 0,
        },
        {
          product: "gold_scrap",
          quantity: 0,
        },
        {
          product: "broken_glass",
          quantity: 0,
        },
      ],
    },
    water_cooling: {
      id: "water_cooling",
      name: "Water Cooling",
      machine: "water_chiller",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 30,
        },
      ],
      outputs: [
        {
          product: "chilled_water",
          quantity: 24,
        },
      ],
    },
    water_desalination_basic: {
      id: "water_desalination_basic",
      name: "Water Desalination (Basic)",
      machine: "basic_distiller",
      duration: 60,
      inputs: [
        {
          product: "seawater",
          quantity: 60,
        },
        {
          product: "coal",
          quantity: 6,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 36,
        },
        {
          product: "brine",
          quantity: 24,
        },
        {
          product: "exhaust",
          quantity: 12,
        },
      ],
    },
    water_dumping: {
      id: "water_dumping",
      name: "Water Dumping",
      machine: "liquid_dump",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 60,
        },
      ],
      outputs: [],
    },
    water_electrolysis: {
      id: "water_electrolysis",
      name: "Water Electrolysis",
      machine: "electrolyzer",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 0.75,
        },
      ],
      outputs: [
        {
          product: "oxygen",
          quantity: 6,
        },
        {
          product: "hydrogen",
          quantity: 1.5,
        },
      ],
    },
    water_pumping: {
      id: "water_pumping",
      name: "Water Pumping",
      machine: "groundwater_pump",
      duration: 60,
      inputs: [],
      outputs: [
        {
          product: "water",
          quantity: 48,
        },
      ],
    },
    water_storage: {
      id: "water_storage",
      name: "Water Storage",
      machine: "fluid_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 4320,
        },
      ],
    },
    water_storage_2: {
      id: "water_storage_2",
      name: "Water Storage",
      machine: "fluid_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 2160,
        },
      ],
    },
    water_storage_3: {
      id: "water_storage_3",
      name: "Water Storage",
      machine: "fluid_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 360,
        },
      ],
    },
    water_storage_4: {
      id: "water_storage_4",
      name: "Water Storage",
      machine: "fluid_storage",
      duration: 60,
      inputs: [
        {
          product: "water",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 180,
        },
      ],
    },
    water_treatment: {
      id: "water_treatment",
      name: "Water Treatment",
      machine: "wastewater_treatment",
      duration: 60,
      inputs: [
        {
          product: "waste_water",
          quantity: 160,
        },
        {
          product: "sand",
          quantity: 8,
        },
        {
          product: "chlorine",
          quantity: 8,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 80,
        },
        {
          product: "sludge",
          quantity: 24,
        },
      ],
    },
    water_treatment_advanced: {
      id: "water_treatment_advanced",
      name: "Water Treatment (Advanced)",
      machine: "wastewater_treatment",
      duration: 60,
      inputs: [
        {
          product: "waste_water",
          quantity: 160,
        },
        {
          product: "filter_media",
          quantity: 8,
        },
        {
          product: "chlorine",
          quantity: 16,
        },
      ],
      outputs: [
        {
          product: "water",
          quantity: 120,
        },
        {
          product: "sludge",
          quantity: 36,
        },
      ],
    },
    wheat_milling: {
      id: "wheat_milling",
      name: "Wheat Milling",
      machine: "mill",
      duration: 60,
      inputs: [
        {
          product: "wheat",
          quantity: 16,
        },
      ],
      outputs: [
        {
          product: "flour",
          quantity: 16,
        },
        {
          product: "animal_feed",
          quantity: 2,
        },
      ],
    },
    wheat_storage: {
      id: "wheat_storage",
      name: "Wheat Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "wheat",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "wheat",
          quantity: 4320,
        },
      ],
    },
    wheat_storage_2: {
      id: "wheat_storage_2",
      name: "Wheat Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "wheat",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "wheat",
          quantity: 2160,
        },
      ],
    },
    wheat_storage_3: {
      id: "wheat_storage_3",
      name: "Wheat Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "wheat",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "wheat",
          quantity: 360,
        },
      ],
    },
    wheat_storage_4: {
      id: "wheat_storage_4",
      name: "Wheat Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "wheat",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "wheat",
          quantity: 180,
        },
      ],
    },
    wood_storage: {
      id: "wood_storage",
      name: "Wood Storage",
      machine: "unit_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "wood",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "wood",
          quantity: 4320,
        },
      ],
    },
    wood_storage_2: {
      id: "wood_storage_2",
      name: "Wood Storage",
      machine: "unit_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "wood",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "wood",
          quantity: 2160,
        },
      ],
    },
    wood_storage_3: {
      id: "wood_storage_3",
      name: "Wood Storage",
      machine: "unit_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "wood",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "wood",
          quantity: 360,
        },
      ],
    },
    wood_storage_4: {
      id: "wood_storage_4",
      name: "Wood Storage",
      machine: "unit_storage",
      duration: 60,
      inputs: [
        {
          product: "wood",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "wood",
          quantity: 180,
        },
      ],
    },
    wood_storage_5: {
      id: "wood_storage_5",
      name: "Wood Storage",
      machine: "spent_fuel_storage",
      duration: 60,
      inputs: [
        {
          product: "wood",
          quantity: 5000,
        },
      ],
      outputs: [
        {
          product: "wood",
          quantity: 5000,
        },
      ],
    },
    yellow_cake_storage: {
      id: "yellow_cake_storage",
      name: "Yellow Cake Storage",
      machine: "loose_storage_iv",
      duration: 60,
      inputs: [
        {
          product: "yellow_cake",
          quantity: 4320,
        },
      ],
      outputs: [
        {
          product: "yellow_cake",
          quantity: 4320,
        },
      ],
    },
    yellow_cake_storage_2: {
      id: "yellow_cake_storage_2",
      name: "Yellow Cake Storage",
      machine: "loose_storage_iii",
      duration: 60,
      inputs: [
        {
          product: "yellow_cake",
          quantity: 2160,
        },
      ],
      outputs: [
        {
          product: "yellow_cake",
          quantity: 2160,
        },
      ],
    },
    yellow_cake_storage_3: {
      id: "yellow_cake_storage_3",
      name: "Yellow Cake Storage",
      machine: "loose_storage_ii",
      duration: 60,
      inputs: [
        {
          product: "yellow_cake",
          quantity: 360,
        },
      ],
      outputs: [
        {
          product: "yellow_cake",
          quantity: 360,
        },
      ],
    },
    yellow_cake_storage_4: {
      id: "yellow_cake_storage_4",
      name: "Yellow Cake Storage",
      machine: "loose_storage",
      duration: 60,
      inputs: [
        {
          product: "yellow_cake",
          quantity: 180,
        },
      ],
      outputs: [
        {
          product: "yellow_cake",
          quantity: 180,
        },
      ],
    },
  },
};
