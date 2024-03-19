<template>
  <div class="home-contain">
    <NavBar />
    <div class="home-main">
      <div class="home-top">
        <h2>Wedding Program</h2>
      </div>
      <div class="program-middle">
        <div class="section-title">
          <h6>Event</h6>
          <h1>Program</h1>
        </div>

        <div class="row">
          <!-- Eventp stat -->
          <div class="row-top">
            <div class="row-inner">
              <h4>Prayer - Pst Clark</h4>
            </div>
            <p>10:00am-10:15am</p>
          </div>     
          <div class="row-top">
            <div class="row-inner">
              <h4>Praise and worship</h4>
            </div>
            <p>10:15am-10:35am</p>
          </div>
  
          <div class="row-top">
            <div class="row-inner">
              <h4>Bridal team entry</h4>
            </div>
              <p>10:27am-10:32am</p>
          </div>
      
          <div class="row-top">
            <div class="row-inner">
              <h4>Bridal entry</h4>
            </div>
              <p>10:33am-10:40am</p>
          </div>
        
          <div class="row-top">
            <div class="row-inner">
              <h4>Scripture reading</h4>
            </div>
            <p>10:41am-10:44am</p>
              <p>Elinah (Gen 2:18-25)</p>
              <p>Risper (Ephesians 5:20-33)</p>
          </div>
        
          <div class="row-top">
            <div class="row-inner">
              <h4>Exchange of vows</h4>
            </div>
              <p>10:45a.m-10:55a.m</p>
          </div>
   
          <div class="row-top">
            <div class="row-inner">
              <h4>Robbin Sings-In his time</h4>
            </div>
              <p>10:56a.m -11:00am</p>
          </div>
        
          <div class="row-top">
            <div class="row-inner">
              <h4>Preaching</h4>
            </div>
              <p>11:02am-11:15pm</p>
          </div>
        
          <div class="row-top">
            <div class="row-inner">
              <h4>Communion</h4>
            </div>
              <p>11:16 a.m-11:20 a.m</p>
          </div>
    
          <div class="row-top">
            <div class="row-inner">
              <h4>This is the day our journey begins</h4>
            </div>
              <p>11:22am -11:32a.m TSA</p>
          </div>
   
          <div class="row-top">
            <div class="row-inner">
              <h4>Offering</h4>
            </div>
              <p>11:33am-11:40a.m</p>
          </div>
      
          <div class="row-top">
            <div class="row-inner">
              <h4>Final blessing</h4>
            </div>
              <p>11:40am</p>
          </div>
        
          <div class="row-top">
            <div class="row-inner">
              <h4>Recession for the newly wedds</h4>
            </div>
              <p>11:45 a.m</p>
          </div>
  
        </div>
          </div>
      </div>
    </div>
    <NavigationComponent />
</template>

<script setup>
import NavigationComponent from '../components/NavigationComponent.vue'
import NavBar from '../components/NavBar.vue'
</script>

<style>
@import '@/style/main.css';
</style>
