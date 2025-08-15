public static class TrackingEnum
{
    public enum EResourceType
    {
        currency,
        item,
        booster,
    }

    public enum EResourceName
    {
        gold,
        star,
        heart,
        freeze_time,
        magnet,
        hammer,
        heart_immortal,
        level_time,
    }

    public enum EResourceReason
    {
        reward,
        exchange,
        purchase,
        use,
        watch_ads,
    }

    public enum EConnection
    {
        offline,
        online,
    }

    public enum EPlayType
    {
        home,
        win_continue,
        restart,
    }

    public enum ELevelResult
    {
        win,
        lose,
        quit,
        exit,
        replay,
        tutorial,
    }

    public enum ELevelLoseBy
    {
        out_of_time,
        bomb_explode,
        shutter_gate_closed,
    }

    public enum EPlacement
    {
        none,
        home_icon,
        home_shop,
        out_of_time_popup,
        daily_gift,
        win_popup_extra_reward,
        buy_freeze_time,
        buy_magnet,
        buy_hammer,
        buy_booster_in_game,
        refill_life,
        add_time,
        level_end,
        win_popup,
        in_game,
        debug,
        unlocked_building,
        building,
        win_streak_popup,
        keep_streak_popup,
        battle_pass,
        golden_ticket_popup,
        glam_rush_popup,
        welcome_back_popup,
        starter_pack_popup,
        one_time_recharge_popup,
        daily_mission_popup,
        vip_pack_popup,
        endless_treasure_popup,
        app_open,
        coin_icon_in_home,
    }

    public enum EIapShowType
    {
        shop,
        pack,
    }

    public enum EAdEndType
    {
        quit,
        done,
    }

    public enum ELoadType
    {
        success = 1,
        fail = 0,
    }
}